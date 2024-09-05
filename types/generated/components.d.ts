import type { Schema, Attribute } from '@strapi/strapi';

export interface LinksSocialIcon extends Schema.Component {
  collectionName: 'components_links_social_icons';
  info: {
    displayName: 'Social Icon';
    icon: 'discuss';
  };
  attributes: {
    newTab: Attribute.Boolean;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'links.social-icon': LinksSocialIcon;
    }
  }
}
