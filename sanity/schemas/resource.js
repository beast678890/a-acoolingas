export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'type', title: 'Type', type: 'string', options: { list: ['SDS', 'CAD', 'Whitepaper', 'Certificate'] } },
    { name: 'file', title: 'File', type: 'file' },
    { name: 'productRefs', title: 'Related products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'language', title: 'Language', type: 'string', options: { list: ['en', 'es'] }, initialValue: 'en' },
    { name: 'summary', title: 'Summary', type: 'text' },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta title', type: 'string' },
        { name: 'metaDescription', title: 'Meta description', type: 'string' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type'
    }
  }
}
