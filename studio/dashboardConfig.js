export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631a86ff5533fb36fe157a70',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ptg8545b',
                  apiId: '4cf4d857-bd32-4f7d-b71b-69056dcdd4af'
                },
                {
                  buildHookId: '631a870084fe1d36fb4a68e3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ipudeufh',
                  apiId: '09d89006-3f0d-4697-93a2-29f8ca3f87ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zdb/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ipudeufh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
