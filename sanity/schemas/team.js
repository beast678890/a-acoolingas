export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
    { name: 'bio', title: 'Biography', type: 'text' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
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
      title: 'name',
      subtitle: 'role',
      media: 'photo'
    }
  }
}
