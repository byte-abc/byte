// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import {list} from '@keystone-6/core'
import {allowAll} from '@keystone-6/core/access'

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {password, relationship, select, text, timestamp} from '@keystone-6/core/fields'

// the document field is a more complicated field, so it has it's own package
import {document} from '@keystone-6/fields-document'
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type {Lists} from '.keystone/types'

export const lists: Lists = {
  Post: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our Post list
    fields: {
      // with this field, you can set a User as the author for a Post
      author: relationship({
        // a Post can only have one author
        //   this is the default, but we show it here for verbosity
        many: false,

        // we could have used 'User', but then the relationship would only be 1-way
        ref: 'User.posts',

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          cardFields: ['name', 'email'],
          displayMode: 'cards',
          inlineConnect: true,
          inlineEdit: {fields: ['name', 'email']},
          linkToItem: true,
        },
      }),

      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: document({
        dividers: true,
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
      }),
      // with this field, you can add some Tags to Posts
      tags: relationship({
        // a Post can have many Tags, not just one
        many: true,

        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: 'Tag.posts',

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          cardFields: ['name'],
          displayMode: 'cards',
          inlineConnect: true,
          inlineCreate: {fields: ['name']},
          inlineEdit: {fields: ['name']},
          linkToItem: true,
        },
      }),
      title: text({validation: {isRequired: true}}),
    },
  }),

  // this last list is our Tag list, it only has a name field for now
  Tag: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,
    // this is the fields for our Tag list
    fields: {
      name: text(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: relationship({many: true, ref: 'Post.tags'}),
    },
    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true,
    },
  }),

  User: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: {kind: 'now'},
      }),

      email: text({
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: 'unique',

        validation: {isRequired: true},
      }),

      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: text({validation: {isRequired: true}}),

      password: password({validation: {isRequired: true}}),

      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      posts: relationship({many: true, ref: 'Post.author'}),
    },
  }),
}
