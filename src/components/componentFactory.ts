/* eslint-disable @typescript-eslint/no-explicit-any */
import StyleguideFieldUsageText from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Text';
import StyleguideFieldUsageRichText from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-RichText';
import StyleguideFieldUsageImage from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Image';
import StyleguideFieldUsageNumber from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Number';
import StyleguideFieldUsageCheckbox from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Checkbox';
import StyleguideFieldUsageDate from './siteCoreComponents/Styleguide/Styleguide-FIeldUsage-Date';
import StyleguideFieldUsageLink from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Link';
import StyleguideFieldUsageCustom from './siteCoreComponents/Styleguide/Styleguide-FieldUsage-Custom';
import StyleguideLayoutTabs from './siteCoreComponents/Styleguide/Styleguide-Layout-Tabs';
import StyleguideLayoutTabsTab from './siteCoreComponents/Styleguide/Styleguide-Layout-Tabs-Tab';
import StyleguideComponentParams from './siteCoreComponents/Styleguide/Styleguide-ComponentParams';
import StyleguideMultilingual from './siteCoreComponents/Styleguide/Styleguide-Multilingual';
import Home from './siteCoreComponents/Home';

const components = new Map();

components.set('Styleguide-FieldUsage-Text', StyleguideFieldUsageText);
components.set('Styleguide-FieldUsage-RichText', StyleguideFieldUsageRichText);
components.set('Styleguide-FieldUsage-Image', StyleguideFieldUsageImage);
components.set('Styleguide-FieldUsage-Number', StyleguideFieldUsageNumber);
components.set('Styleguide-FieldUsage-Checkbox', StyleguideFieldUsageCheckbox);
components.set('Styleguide-FieldUsage-Date', StyleguideFieldUsageDate);
components.set('Styleguide-FieldUsage-Link', StyleguideFieldUsageLink);
components.set('Styleguide-FieldUsage-Custom', StyleguideFieldUsageCustom);
components.set('Styleguide-Layout-Tabs', StyleguideLayoutTabs);
components.set('Styleguide-Layout-Tabs-Tab', StyleguideLayoutTabsTab);
components.set('Styleguide-ComponentParams', StyleguideComponentParams);
components.set('Styleguide-Multilingual', StyleguideMultilingual);
components.set('Home', Home);

const componentFactory = (componentName: any) => components.get(componentName);

export default componentFactory;
