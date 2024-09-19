import Layout from "@theme/Layout";
import { NETWORK_NAMES } from "@site/src/plugins/plugin-json-rpc";
import ParserOpenRPC from "@site/src/components/ParserOpenRPC";
import React, { useEffect, useState } from "react";
import DocSidebar from '@theme/DocSidebar';
import styles from "@site/src/theme/Layout/styles.module.css"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as upperFirst  from "lodash.upperfirst"
import { lineaSidebarNames } from "@site/src/lib/constants";

const formatMenuLabel = (label) => {
  const menuItem = lineaSidebarNames.find(name => name.old === label);
  if (menuItem) {
    return menuItem.new;
  }
  return label;
}

function generateSidebarItems(docs) {
  const categories = {};

  docs.forEach((doc) => {
    if (doc.id === 'index') {
      categories['Introduction'] = {
        type: 'link',
        href: '/services',
        label: upperFirst(doc.frontMatter?.sidebar_label || doc.title),
      };
      return;
    }

    const pathParts = doc.sourceDirName.split('/');
    let currentCategory = categories;
    let isIndexPage = doc.id.endsWith('/index');
    pathParts.map(pathPart => formatMenuLabel(pathPart)).forEach((part, index) => {
      if (!currentCategory[part]) {
        if (isIndexPage && index === pathParts.length - 2) {
          currentCategory[part] = {
            type: 'category',
            label: upperFirst(doc.frontMatter?.sidebar_label || doc.frontMatter?.title || part),
            collapsed: false,
            collapsible: true,
            link: {
              type: 'generated-index',
              slug: pathParts.slice(0, index + 1).join('/')
            },
            items: []
          };
        } else {
          currentCategory[part] = {
            type: 'category',
            label: upperFirst(part),
            collapsed: part !== "Get started",
            collapsible: true,
            items: []
          };
        }
      }

      if (index === pathParts.length - 1 && !isIndexPage) {
        currentCategory[part].items.push({
          type: 'link',
          label: doc.frontMatter?.title || doc.title,
          href: `/services/${doc.id.replace(/\/index$/, '')}`,
          sidebar_position: doc.frontMatter?.sidebar_position || Number.MAX_SAFE_INTEGER
        });
      }
      currentCategory = currentCategory[part].items;
    });
  });

  const convertToArray = (categoryObj) => {
    return Object.values(categoryObj).map((category) => {
      if (category.items && typeof category.items === 'object') {
        category.items = convertToArray(category.items);
        if (category.items.every(item => item.sidebar_position !== undefined)) {
          category.items.sort((a, b) => (a.sidebar_position || Number.MAX_SAFE_INTEGER) - (b.sidebar_position || Number.MAX_SAFE_INTEGER));
        }
      }
      return category;
    });
  };
  return convertToArray(categories);
}

const sidebar_wrapper_classes = "theme-doc-sidebar-container docSidebarContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocRoot-Layout-Sidebar-styles-module"

const CustomReferencePage = (props) => {
  const customData = props.route.customData;
  const { siteConfig } = useDocusaurusContext();
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    setFormattedData(generateSidebarItems(siteConfig.customFields.sidebarData.docs).map(item => {
      if (item?.label === "Reference" && item?.items) {
        return {
          ...item,
          items: item.items.map(referenceItem => {
            if (referenceItem?.label === upperFirst(NETWORK_NAMES.linea) && referenceItem?.items) {
              return { ...referenceItem, items: [...referenceItem.items, ...siteConfig.customFields.dynamicData.map(dynamicItem => {
                  const jsonRpcCategory = referenceItem.items.find(({ label }) => label === 'JSON-RPC APIs');
                  if (jsonRpcCategory) {
                    return {
                      ...dynamicItem,
                      ...{ items: [...dynamicItem.items, ...jsonRpcCategory.items.filter(refItem => refItem.type === "category")] }
                    };
                  }
                  return dynamicItem;
                })] };
            }
            return referenceItem;
          })
        }
      }
      return item;
    }));
  }, []);

  return formattedData ? (
    <Layout>
      <div className={styles.pageWrapper}>
        <aside className={sidebar_wrapper_classes}>
          <DocSidebar sidebar={formattedData} path="" onCollapse={() => {}} isHidden={false} />
        </aside>
        <div className={styles.mainContainer}>
          <div className={styles.contentWrapper}>
            <ParserOpenRPC
              network={NETWORK_NAMES.linea}
              method={customData.name}
            />
          </div>
        </div>
      </div>
    </Layout>
  ) : null;
};

export default CustomReferencePage;