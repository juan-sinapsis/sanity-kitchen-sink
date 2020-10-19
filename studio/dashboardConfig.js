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
                  buildHookId: '5f8e1e7bc6e16e1672637505',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e741pwpz',
                  apiId: 'e3b624fa-63ed-47b0-8594-99c72a559090'
                },
                {
                  buildHookId: '5f8e1e7beb15b01b0748c069',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g8s26ox2',
                  apiId: '3ed7eaf1-e612-4bbf-ad8a-a21041791961'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juan-sinapsis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g8s26ox2.netlify.app', category: 'apps'}
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
