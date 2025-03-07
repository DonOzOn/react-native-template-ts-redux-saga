/* eslint-disable @typescript-eslint/no-explicit-any */
import StyleguideFieldUsageText from './siteCorecomponents/Styleguide-FieldUsage-Text';
import StyleguideFieldUsageRichText from './siteCorecomponents/Styleguide-FieldUsage-RichText';
import StyleguideFieldUsageImage from './siteCorecomponents/Styleguide-FieldUsage-Image';
import StyleguideFieldUsageNumber from './siteCorecomponents/Styleguide-FieldUsage-Number';
import StyleguideFieldUsageCheckbox from './siteCorecomponents/Styleguide-FieldUsage-Checkbox';
import StyleguideFieldUsageDate from './siteCorecomponents/Styleguide-FIeldUsage-Date';
import StyleguideFieldUsageLink from './siteCorecomponents/Styleguide-FieldUsage-Link';
import StyleguideFieldUsageCustom from './siteCorecomponents/Styleguide-FieldUsage-Custom';
import StyleguideLayoutTabs from './siteCorecomponents/Styleguide-Layout-Tabs';
import StyleguideLayoutTabsTab from './siteCorecomponents/Styleguide-Layout-Tabs-Tab';
import StyleguideComponentParams from './siteCorecomponents/Styleguide-ComponentParams';
import StyleguideMultilingual from './siteCorecomponents/Styleguide-Multilingual';
import Home from './siteCorecomponents/Home';

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
