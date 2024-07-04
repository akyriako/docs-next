import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorials'}],
  blueprintsSidebar: [{type: 'autogenerated', dirName: 'blueprints'}],
  // bestPracticesSidebar: [{type: 'autogenerated', dirName: 'best-practices'}],
  cafSidebar: [{type: 'autogenerated', dirName: 'caf'}],

  // But you can create a sidebar manually
  
  // tutorialSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],

  bestPracticesSidebar: [
    {
      type: 'doc',
      id: 'best-practices/best-practices',
    },
    {
      type: 'category',
      label: 'Application Services',
      items: [
        {
          type: 'category',
          label: 'Application Operations Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'API Gateway (APIG)',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Distributed Message Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Simple Message Notification',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Big Data & Data Analysis',
      items: [
        {
          type: 'category',
          label: 'Cloud Search Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'DataArts Studio',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Ingestion Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Lake Insight',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Warehouse Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'ModelArts',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'MapReduce Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Optical Character Recognition',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Computing',
      items: [
        {
          type: 'category',
          label: 'Auto-Scaling',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Bare Metal',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dedicated Host',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Cloud Server',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'FunctionGraph 🔥',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Image Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        {
          type: 'category',
          label: 'Cloud Container Engine',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Software Repository for Container',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Databases',
      items: [
        {
          type: 'category',
          label: 'Distributed Cache Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Distributed Database Middleware',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Document Database Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Replication Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'GaussDB (for MySQL)',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'GaussDB NoSQL',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Relational Database Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Management & Deployment',
      items: [
        {
          type: 'category',
          label: 'Application Performance Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Create 🔥',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Eye',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Trace Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Log Tank Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Resource Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tag Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      items: [
        {
          type: 'category',
          label: 'Direct Connect',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Domain Name Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic IP',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Load Balancing',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Enterprise Router',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'NAT Gateway',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Private Link Access Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Secure Mail Gateway',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Virtual Private Cloud',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'VPC Endpoint',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Virtual Private Network',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security Services',
      items: [
        {
          type: 'category',
          label: 'Anti DDoS',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Database Security Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Host Security Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Identity and Access Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Key Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Application Firewall',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dedicated Web Application Firewall',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'category',
          label: 'Cloud Backup and Recovery',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Server Backup Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Volume Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Object Storage Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Storage Disaster Recovery Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scalable File Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
        {
          type: 'category',
          label: 'Volume Backup Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://example.com',
            },
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc1',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc2',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'doc3',
    //     },
    //   ],
    // },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
  ],
   
};

export default sidebars;
