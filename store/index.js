export const strict = false

export const state = () => ({
  selectedCategory: [],
  categories: [
    {
      category: 'Design Tools',
      check: false,
    },
    {
      category: 'Inspiration',
      check: false,
    },
    {
      category: 'Learn Design',
      check: false,
    },
    {
      category: 'Stock Photos',
      check: false,
    },
    {
      category: 'Design News',
      check: false,
    },
    {
      category: 'Illustrations',
      check: false,
    },
    {
      category: 'Resources',
      check: false,
    },
    {
      category: 'Icons',
      check: false,
    },
    {
      category: 'Typography',
      check: false,
    },
    {
      category: 'Color',
      check: false,
    },
    {
      category: 'Design Systems',
      check: false,
    },
    {
      category: 'Podcasts',
      check: false,
    },
    {
      category: 'Prototyping Tools',
      check: false,
    },
    {
      category: 'Wireframing',
      check: false,
    },
    {
      category: 'Mockup Tools',
      check: false,
    },
    {
      category: 'Books',
      check: false,
    },
    {
      category: 'Jobs',
      check: false,
    },
    {
      category: 'Accessibility',
      check: false,
    },
  ],
  resources: [
    {
      NAME: 'Figma',
      DESCRIPTION: 'Design and collaborate all in the browser',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png',
      LINK: 'https://www.figma.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Dribbble',
      DESCRIPTION: 'Online community for showcasing user artwork',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfc3c31702c6483918f0_5ea0506b26dc30d472180495_dribbble.png',
      LINK: 'https://dribbble.com/',
    },
    {
      NAME: 'Muzli',
      DESCRIPTION: 'All the design inspiration you need. Served fresh.',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf94fa94700941dfd843_5ea59490f0e2085c48538f90_logo%2520(41).png',
      LINK: 'https://muz.li/?ref=designsnitch.com',
    },
    {
      NAME: 'Webflow',
      DESCRIPTION: 'Learn web design with free video courses and tutorials',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf58f09d340eecb5e7e7_5ea45dd2dddc5f898c87877a_download%2520(1).jpeg',
      LINK: 'https://university.webflow.com/videos?ref=designsnitch.com',
    },
    {
      NAME: 'Mobbin',
      DESCRIPTION: 'Latest mobile design patterns',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfb607461816edc1f29a_5ea4d9a727484b19b5aa737b_b576fcfb-029b-413c-8adf-ee4d6ace85e1.gif',
      LINK: 'https://mobbin.design/?ref=designsnitch.com',
    },
    {
      NAME: 'Checklist.design',
      DESCRIPTION: 'A collection of the best UX and UI practices.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf9d888586fcc99cc02d_5ea586d8808bdf313a9199cb_4e326366-82ae-4c25-9f84-4cec8af7efca.gif',
      LINK: 'https://www.checklist.design/?ref=designsnitch.com',
    },
    {
      NAME: 'Unsplash',
      DESCRIPTION: 'The internet’s source of freely usable images',
      CATEGORY: 'Stock Photos',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9c52c5e014f90381a439eb_unsplash.png',
      LINK: 'https://unsplash.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Hey Designer',
      DESCRIPTION:
        'Daily curated newsfeed for product people, UXers, PMs and frontend developers.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf8ff09d34eeb9b60e8b_5ea1c63e950eef37fe37322e_wBaaV_1R_400x400.jpeg',
      LINK: 'https://heydesigner.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Sketch',
      DESCRIPTION:
        'Sketch is the most popular design tool for UX/UI designers 💎',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa19a5ca97ceb65ae2a_5e9b791638205a6bd4d0913a_sketch.png',
      LINK: 'https://www.sketchapp.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Laws of UX',
      DESCRIPTION:
        'Researched principles and laws that help guide design process',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf816cee8876ca590c97_5e9f723e81f2dfa1fa4a5789_lawsofux.jpeg',
      LINK: 'https://lawsofux.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Open Peeps',
      DESCRIPTION: 'A hand-drawn people illustration library',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea468278ad6b6d7a0923286_logo%20(14).png',
      LINK: 'https://www.openpeeps.com?ref=designsnitch.com',
    },
    {
      NAME: 'UI Sources',
      DESCRIPTION: 'Interactions from the best designed and top grossing apps',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfb72fa37e4bfc2cbc8d_5ea584fadddc5f49128dddf5_ULdTrorn_400x400.jpeg',
      LINK: 'https://gumroad.com/a/733443187',
    },
    {
      NAME: 'Design Calendar',
      DESCRIPTION: 'The best online design events',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea94d17aeb117c64c516b04_H8FszW5c_400x400.jpg',
      LINK: 'https://www.designcalendar.io/remote/events?ref=designsnitch.com',
    },
    {
      NAME: 'Nicely done',
      DESCRIPTION: 'Products & pattern designs inspiration',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfbe8b51eb1d9fec7126_5ea050b8f1d8092fdd9b6255_nicelydone.png',
      LINK: 'http://nicelydone.club/?ref=designsnitch.com',
    },
    {
      NAME: 'Sidebar',
      DESCRIPTION: 'The five best design links, every day.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf72925f4804b109ab35_5ea5960fdddc5fd9b48e3d00_5e2ee105-6878-48ce-969a-14d2ddb7cd7c.jpeg',
      LINK: 'https://sidebar.io?ref=designsnitch.com',
    },
    {
      NAME: 'Figma Resources',
      DESCRIPTION: 'Resources made with love by the Figma community',
      CATEGORY: 'Resources',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf68fadd3c07dfd57d42_5ea1b3b091965beef900f9bf_reconfig-avatar.png',
      LINK:
        'https://www.notion.so/Remote-Design-Resources-from-the-Community-e2af55fa7ace484bbe66d98ba3fd2020',
    },
    {
      NAME: 'UI Movement',
      DESCRIPTION: 'The best UI design inspiration, every day',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfb0a13e98640410243d_5ea576ae5186cf3e5f098ce3_logo%2520(34).png',
      LINK: 'https://uimovement.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Feather Icons',
      DESCRIPTION: 'Simply beautiful open source icons',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa62fa37e32bd2ca95c_5e9b783638205aab56d08b62_feather.png',
      LINK: 'https://feathericons.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Iconscout',
      DESCRIPTION: 'High-quality Icons, illustrations and stock photos',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf5088858644979c8c11_5ea465e3c07d78c31d3558ec_logo%2520(13).png',
      LINK: 'https://iconscout.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Google Fonts',
      DESCRIPTION:
        'Making the web more beautiful, fast, and open through great typography',
      CATEGORY: 'Typography',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf3ffa94701139df77e0_5ea4d315d3a80f6efdc6df29_logo%2520(25).png',
      LINK: 'https://fonts.google.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Happy Hues',
      DESCRIPTION: 'Curated colors in context',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea592f8c07d78e3663ba689_f7e1dd94-a807-44ba-adb0-8482164a0a0b.gif',
      LINK: 'https://www.happyhues.co/',
    },
    {
      NAME: 'Growth Design',
      DESCRIPTION: 'Growth & UX case studies in a comic book format',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cafc88df81773c4242be_5ea57d4327484b52e1ad6141_5qFvBb7Q_400x400.png',
      LINK: 'https://growth.design/case-studies?ref=designsnitch.com',
    },
    {
      NAME: 'Blush',
      DESCRIPTION: 'Illustrations for everyone',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5eb94636aacf3117d9fe45f1_3eP0tlLv_400x400.jpg',
      LINK: 'https://blush.design?ref=designsnitch.com',
    },
    {
      NAME: 'Humaaans',
      DESCRIPTION: 'Mix-&-match illustrations of people with a design library',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b7a76b27cf6f02a99a2eb_humans.png',
      LINK: 'https://www.humaaans.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Design Systems Checklist',
      DESCRIPTION: 'An open-source checklist to help build design systems',
      CATEGORY: 'Design Systems',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5eacb1ab661b3f5cac2e66e7_logo512.png',
      LINK: 'https://designsystemchecklist.com?ref=designsnitch.coms',
    },
    {
      NAME: 'Adobe XD',
      DESCRIPTION: 'An all-in-one design and prototyping app.',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf976cee8839b0592499_5e9b78dd9aae7ea132b51065_xd.png',
      LINK: 'https://www.adobe.com/uk/products/xd.html?ref=designsnitch.com',
    },
    {
      NAME: 'Layout',
      DESCRIPTION:
        'Weekly podcast about design, tech, programming and everything else',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfaca13e98eeb61020ca_5e9ed3b485e0553d16e27617_artwork-spec.png',
      LINK: 'https://layout.fm/?ref=designsnitch.com',
    },
    {
      NAME: 'Apple Design Videos',
      DESCRIPTION:
        'Learn about developing for Apple platforms with video presentations by Apple experts.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b78661b847f509a4f9efc_apple.png',
      LINK: 'https://developer.apple.com/videos/design/?ref=designsnitch.com',
    },
    {
      NAME: 'Duo',
      DESCRIPTION: 'Collection of colour combinations curated from the web',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea02b4287be012135f4e602_duo.png',
      LINK: 'https://duo.alexpate.uk?ref=designsnitch.com',
    },
    {
      NAME: 'Remix',
      DESCRIPTION: 'Open-source neutral-style system symbols',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf51f05de85fddbf1a12_5ea46538af4837441c349a86_remixicon.jpeg',
      LINK: 'https://remixicon.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Control',
      DESCRIPTION: '108 customizable illustrations',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6caf9f05de8b254bc67e5_5ea5859b7899697f87cdb686_e8b36e21-ae21-4365-a118-9b52a159eb18.png',
      LINK: 'https://control.rocks/?ref=designsnitch.com',
    },
    {
      NAME: 'InVision Studio',
      DESCRIPTION: 'Turn screens into interactive prototypes',
      CATEGORY: 'Prototyping Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa08b51ebcbb7ec525a_5ea04e4119bbdc1105ccd7be_invision.png',
      LINK: 'https://www.invisionapp.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Design Better Podcast',
      DESCRIPTION: 'Insights from the world’s most renowned design leaders,',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea46ef8d3a80fa58fc45572_256.png',
      LINK: 'https://www.designbetter.co/podcast',
    },
    {
      NAME: 'Humane',
      DESCRIPTION: 'Tips for designing ethically humane digital products',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9f6e55578be5789009500c_humanebydesign.jpg',
      LINK: 'https://humanebydesign.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Eva',
      DESCRIPTION: '480 delightful icons available for free.',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa58b51eb7e0dec5ad2_5e9b796a4c5ff9029bc0c494_eva-icons.png',
      LINK: 'https://akveo.github.io/eva-icons?ref=designsnitch.com',
    },
    {
      NAME: 'UX Collective',
      DESCRIPTION: 'Curated stories on UX, Visual & Product Design',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cae48885860a269a7b6f_5ea5aad3c07d782d0b3c4161_Screenshot%25202020-04-26%2520at%252016.37.47.png',
      LINK: 'https://uxdesign.cc/?ref=designsnitch.com',
    },
    {
      NAME: 'Undraw',
      DESCRIPTION: 'Open-source illustrations for any idea',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea46884c07d785b513566af_Frrff47E_400x400.jpg',
      LINK: 'https://undraw.co/illustrations?ref=designsnitch.com',
    },
    {
      NAME: 'Whimsical',
      DESCRIPTION: 'Collaborate visually. Fast and delightful.',
      CATEGORY: 'Wireframing',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b76d34c5ff923ebc0b33f_whimsical.png',
      LINK: 'https://whimsical.co?ref=designsnitch.com',
    },
    {
      NAME: 'Pexels',
      DESCRIPTION: 'Stock photos & videos shared by talented creators.',
      CATEGORY: 'Stock Photos',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfaea13e983f2c10225f_5ea202d7783187c561203a16_Ce7rN_66_400x400.jpeg',
      LINK: 'https://www.pexels.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Animockup',
      DESCRIPTION: 'Animated product mockups with videos and animated GIFs',
      CATEGORY: 'Mockup Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf7ba13e9817b910040e_5ea5cdac27484b5005af54d6_Screenshot%25202020-04-26%2520at%252019.06.27.png',
      LINK: 'https://animockup.com/?ref=designsnitch.com',
    },
    {
      NAME: 'DrawKit',
      DESCRIPTION:
        'Beautiful illustrations for you to use on your next website',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6caf7f09d34dedfb4a9a5_5ea58c8c8ad6b660b797f229_jqWjjimw_400x400.jpeg',
      LINK: 'https://www.drawkit.io/?ref=designsnitch.com',
    },
    {
      NAME: 'Hooked',
      DESCRIPTION: 'How products are made to addictive',
      CATEGORY: 'Books',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfc6c31702892a391ebf_5ea5be8c8ad6b6d8d19957f8_logo%2520(2).jpeg',
      LINK:
        'https://www.amazon.co.uk/Hooked-How-Build-Habit-Forming-Products/dp/0241184835/ref=as_li_ss_tl?_encoding=UTF8&qid=1586802810&sr=8-1&linkCode=ll1&tag=kylerdesign-21&linkId=725464c384642c38e0f75c5ef01d78a9&language=en_GB',
    },
    {
      NAME: 'Open Doodles',
      DESCRIPTION: 'A Free Set of Sketchy Illustrations',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea467b327484b4639a7b294_opendoodles.jpg',
      LINK: 'https://opendoodles.com?ref=designsnitch.com',
    },
    {
      NAME: 'Design+Code',
      DESCRIPTION: 'Complete courses about the best tools and design systems.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf85fadd3c4be1d59d6e_5ea593195186cff1560a5a0c_454a0932-c843-43bd-85b8-7d4c08c6336d.png',
      LINK: 'https://designcode.io/?ref=designsnitch.com',
    },
    {
      NAME: 'Typewolf',
      DESCRIPTION:
        'Helps designers choose the perfect font combination for their next projecct',
      CATEGORY: 'Typography',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea4d947c07d78ca953860c0_c1919ab0-b6f6-4af5-84e5-405596b3fbec.jpeg',
      LINK: 'https://www.typewolf.com/?ref=designsnitch.com',
    },
    {
      NAME: 'DesignBetter.co',
      DESCRIPTION:
        'The essential guide to the best design practices from top design experts',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf826cee88e057590cf5_5ea5873e49d1a76f95139726_8eed7243-b63c-4d6f-895f-6cec9e6fa724.gif',
      LINK: 'https://www.designbetter.co?ref=designsnitch.com',
    },
    {
      NAME: 'Google Material Design',
      DESCRIPTION: 'Designing Android applications.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b7861572a494adcce5d74_google.png',
      LINK: 'https://material.io/guidelines?ref=designsnitch.com',
    },
    {
      NAME: 'Femke',
      DESCRIPTION:
        'Product designer focusing on learnings and experiences of being a designer',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cadd888586dcfc9a77e6_5ea5cab427484b53ceaf465a_Screenshot%25202020-04-26%2520at%252018.53.47.png',
      LINK: 'https://www.youtube.com/channel/UCWUGGwfTfJ0-2jUS3dZqOJA/videos',
    },
    {
      NAME: "Don't Make Me Think",
      DESCRIPTION: 'A Common Sense Approach to Web Usability',
      CATEGORY: 'Books',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cadc925f48214f07614e_5ea6b57ca5a8d26adbe43e56_don%2527t%2520make%2520me%2520think.jpeg',
      LINK: 'https://amzn.to/2xT9qIP',
    },
    {
      NAME: 'Amazing Design People',
      DESCRIPTION: 'Find amazing designers for hire',
      CATEGORY: 'Jobs',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5eac3c7bd76edd6da7e3f6ef_adplist.org%20logo.png',
      LINK: 'https://www.adplist.org?ref=designsnitch.com',
    },
    {
      NAME: 'Adobe Colour',
      DESCRIPTION: 'Browse thousands of color combinations',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b771c2afc3c9d312e3ce5_adobe-color.png',
      LINK: 'https://color.adobe.com/explore',
    },
    {
      NAME: 'Stark',
      DESCRIPTION: 'Color-blind simulator and contrast checker',
      CATEGORY: 'Accessibility',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf6cfa94701b12dfadc3_5ea1724b7e8730517b89d38f_zCoOm2nkb-Stark%2520Logo%2520Avatar.jpeg',
      LINK: 'https://www.getstark.co?ref=designsnitch.com',
    },
    {
      NAME: 'Paper Sizes',
      DESCRIPTION: 'All the sizes for international paper formats',
      CATEGORY: 'Resources',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea47d940881548338b1e789_2yDFNsb6_400x400.jpg',
      LINK: 'https://papersizes.io?ref=designeresourc.es',
    },
    {
      NAME: 'Plant',
      DESCRIPTION: 'Version Control for Designers',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf9edc1a8a3d067b9237_5e9b78fb38205aca43d09097_plant.png',
      LINK: 'https://plantapp.io?ref=designsnitch.com',
    },
    {
      NAME: 'Carbon Design System',
      DESCRIPTION: "IBM's design system",
      CATEGORY: 'Design Systems',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf57fadd3c7efed56e91_5ea45e84c07d78d08c35313f_download.png',
      LINK: 'https://www.carbondesignsystem.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Principle',
      DESCRIPTION:
        'Principle makes it easy to design animated and interactive user interfaces',
      CATEGORY: 'Prototyping Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf49ce45cf3088853e5e_5ea4713c789969a726c7d120_download%2520(2).png',
      LINK: 'https://principleformac.com?ref=designsnitch.com',
    },
    {
      NAME: 'Noun Project',
      DESCRIPTION:
        'Over 2 Million curated icons, created by a global community',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6caecce45cf6f8882f45b_5ea59ee5a5a8d2f81fde36ac_nVvwwEYd_400x400.png',
      LINK: 'https://thenounproject.com?ref=designsnitch.com',
    },
    {
      NAME: 'Roots',
      DESCRIPTION:
        'A weekly podcast profiling the stories of Filipino Designers',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea70b767736e02629a2fb6f_Screenshot%202020-04-27%20at%2017.42.15.png',
      LINK: 'https://rootspodcast.design?ref=designsnitch.com',
    },
    {
      NAME: 'Khroma',
      DESCRIPTION:
        'Uses AI to learn which colors you like and creates palettes',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf69a13e986dd80ffa3f_5ea1af0ffe57820563564805_logo%2520(1).png',
      LINK: 'http://khroma.co?ref=designresources',
    },
    {
      NAME: 'Awwwards',
      DESCRIPTION: 'Awards for design, creativity and innovation',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfbace45cfa8aa859916_5ea5752fd3a80f1c69c97a3a_31714420_832450760278142_4302607574668148736_n.jpeg',
      LINK: 'http://www.awwwards.com?ref=designsnitch.com',
    },
    {
      NAME: 'Boooom',
      DESCRIPTION: 'Design Management and Leadership Jobs',
      CATEGORY: 'Jobs',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf74bfc7b936917b4b66_5ea0a7918436ec842058b884_Vbk4S8Qt_400x400.png',
      LINK: 'https://boooom.co/?ref=designsnitch.com',
    },
    {
      NAME: 'We The Makers Club',
      DESCRIPTION: 'Sources and selects the top creative jobs',
      CATEGORY: 'Jobs',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf739e03cf7924cb6a86_5ea0a9a761e285117a641d5b_we-the-makers.png',
      LINK: 'http://wethemakers.club/jobs?ref=designsnitch.com',
    },
    {
      NAME: 'New Layer',
      DESCRIPTION:
        'A conversation on everything related to digital product design',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea46f97d3a80f8557c45963_313x0w.jpg',
      LINK: 'https://anchor.fm/new-layer?ref=designsnitch.com',
    },
    {
      NAME: 'Illlustrations',
      DESCRIPTION: 'A large set of open-source illustrations library',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea4750c8ad6b65e4f92791f_wk9iVt89_400x400.jpg',
      LINK: 'https://illlustrations.co?ref=designsnitch.com',
    },
    {
      NAME: 'Lottie',
      DESCRIPTION: 'Easily add high-quality animation to any native app',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf3bce45cf6c998531f3_5ea4e57027484b757caa9ff8_logo%2520(30).png',
      LINK: 'https://airbnb.design/lottie/?ref=designsnitch.com',
    },
    {
      NAME: 'Good Books',
      DESCRIPTION: 'Discover the best design books',
      CATEGORY: 'Books',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea80fb4f240e5411bfd27ff_vp21I4yD_400x400.jpg',
      LINK: 'https://www.goodbooks.io/categories/design?ref=designsnitch.com',
    },
    {
      NAME: 'Behance',
      DESCRIPTION: 'Find inspiration from other designers',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfb5fadd3cf410d5db31_5ea5763d8ad6b69d06977729__QglFGym_400x400.jpeg',
      LINK: 'https://www.behance.net/?ref=designsnitch.com',
    },
    {
      NAME: 'Design Life',
      DESCRIPTION:
        'Two women in tech talk about balancing side projects on top of a full time job.',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfaca13e986eb3102156_5e9ed3f48229a8238b78b391_designlife.jpeg',
      LINK: 'https://www.designlife.fm/?ref=designsnitch.com',
    },
    {
      NAME: 'Product Hunt',
      DESCRIPTION: 'A curation of the best new products, every day.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf946cee88af43591f51_5e9b78bfd3886ab151f0d92e_producthunt.png',
      LINK: 'https://www.producthunt.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Facebook',
      DESCRIPTION: 'A collection of tools and resources from Facebook Design.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea57874dddc5f4fc38d91a2_download%20(5).png',
      LINK: 'https://facebook.design/?ref=designsnitch.com',
    },
    {
      NAME: 'Design Details',
      DESCRIPTION: 'A weekly conversation about design process and culture',
      CATEGORY: 'Podcasts',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9ed0e2278d0a0b28793baa_design-details.jpg',
      LINK: 'https://spec.fm/podcasts/design-details?ref=designsnitch.com',
    },
    {
      NAME: 'Apple HIG',
      DESCRIPTION: 'Designing iOS applications.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b78661b847f509a4f9efc_apple.png',
      LINK:
        'https://developer.apple.com/ios/human-interface-guidelines/overview/themes/',
    },
    {
      NAME: 'Avataaars',
      DESCRIPTION: 'Mix and match avatars illustration library',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea469175186cffb580429e3_logo%20(15).png',
      LINK: 'https://avataaars.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Charco',
      DESCRIPTION: 'A set of 16 handcrafted illustrations',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea474c6af48377cf8350349_logo%20(16).png',
      LINK: 'https://www.karthiksrinivas.in/charco?ref=designsnitch.com',
    },
    {
      NAME: 'Google',
      DESCRIPTION: 'Writings of designers, writers, and developers at Google.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b7861572a494adcce5d74_google.png',
      LINK: 'https://design.google/?ref=designsnitch.com',
    },
    {
      NAME: 'Flux',
      DESCRIPTION:
        'Flux is the personal vlog of Ran Segall, a designer and entrepreneur',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9edbe3278d0a767e7988cc_unnamed.jpg',
      LINK:
        'https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q/featured?ref=designsnitch.com',
    },
    {
      NAME: 'Color Hunt',
      DESCRIPTION: 'Free and open platform for color inspiration',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea0291287be017411f4dc60_colorhunt.jpg',
      LINK: 'https://colorhunt.co/?ref=designsnitch.com',
    },
    {
      NAME: 'Dribbble Jobs',
      DESCRIPTION: 'Connect with designers and jobs worldwide',
      CATEGORY: 'Jobs',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea0506b26dc30d472180495_dribbble.png',
      LINK: 'https://dribbble.com/jobs',
    },
    {
      NAME: 'Color Safe',
      DESCRIPTION: 'Build accessible colour combinations',
      CATEGORY: 'Accessibility',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf6b9e03cff59ecb5e94_5ea177016a5493b5d8573779_Resources%2520(2).png',
      LINK: 'http://colorsafe.co?ref=designsnitch.com',
    },
    {
      NAME: 'Nielson Norman Group',
      DESCRIPTION: 'World Leaders in Research-Based User Experience',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf5a4df52bf0c4222215_5ea45bcf8ad6b66fe791edb0_UBseIdC4_400x400.png',
      LINK: 'https://www.nngroup.com?ref=designsnitch.com',
    },
    {
      NAME: 'Ouch!',
      DESCRIPTION: 'Free Vector Illustrations to Class up Your Project',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6caf6074618aad4c02dcf_5ea58d51c07d78e68e3b8cba_logo%2520(39).png',
      LINK: 'https://icons8.com/ouch?ref=designsnitch.com',
    },
    {
      NAME: 'Framer',
      DESCRIPTION: 'A powerful product that blends design and development',
      CATEGORY: 'Prototyping Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf9ff05de83aa7bf6298_5ea0506013c9406356f779e9_framer.png',
      LINK: 'https://framer.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Case Study Club',
      DESCRIPTION: 'Curated gallery of the best UI/UX design case studies.',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf904df52b66b122367c_5ea592af70b5054137444644_e27c1876-11e4-4ee6-bcba-3fe7bf077215.jpeg',
      LINK: 'https://www.casestudy.club/?ref=designsnitch.com',
    },
    {
      NAME: 'Microsoft',
      DESCRIPTION: 'Latest news from Microsoft design',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b784c572a49587bce5d62_microsoft.png',
      LINK: 'https://www.microsoft.com/design/?ref=designsnitch.com',
    },
    {
      NAME: 'Absurd Design',
      DESCRIPTION: 'Absurd illustrations that make sense',
      CATEGORY: 'Illustrations',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea4740daf4837a50d35003e_CbTxFmIl_400x400.png',
      LINK: 'https://absurd.design/?ref=designsnitch.com',
    },
    {
      NAME: 'Dimmy.club',
      DESCRIPTION: 'Device mockup generator for your screenshots',
      CATEGORY: 'Mockup Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf41fa9470701fdf7ae1_5ea48466808bdf02ce8c78c8_logo%2520(23).png',
      LINK: 'https://dimmy.club/?ref=designsnitch.com',
    },
    {
      NAME: 'Typo/graphic',
      DESCRIPTION: 'Connect to different cultures through poster design',
      CATEGORY: 'Typography',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea4d840c07d784add385c0c_barra-220x220b_400x400.png',
      LINK: 'https://www.typographicposters.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Pixelic',
      DESCRIPTION: 'Collaborative workspace for Figma users',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ebff1638359726f7ed1be3f_Pixelic.jpg',
      LINK: 'https://www.pixelic.io?ref=designsnitch.com',
    },
    {
      NAME: 'Colorsinspo',
      DESCRIPTION: 'All in one resource for finding colors',
      CATEGORY: 'Color',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ebff6cc3f4c03095f50967f_ColorInspo.jpg',
      LINK: 'https://colorsinspo.com?ref=designsnitch.com',
    },
    {
      NAME: 'Best Website Gallery',
      DESCRIPTION: 'Hand-picked website inspiration',
      CATEGORY: 'Inspiration',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfaffadd3cc98fd5d323_5e9b77b69ba59980b2fed995_best-website-gallary.png',
      LINK: 'https://bestwebsite.gallery/?ref=designsnitch.com',
    },
    {
      NAME: 'Ionicons',
      DESCRIPTION: 'Beautifully crafted open source icons',
      CATEGORY: 'Icons',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa7fadd3cf6d4d5ca73_5e9b78301b847f68844f9e05_ionicons.png',
      LINK: 'https://ionicons.com/?ref=designsnitch.com',
    },
    {
      NAME: 'Zeplin',
      DESCRIPTION: 'Handoff designs with specs, assets and code snippets',
      CATEGORY: 'Design Tools',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cfa49e03cf7683cb9ccd_5e9b7960b27cf68119999c39_zeplin.png',
      LINK: 'https://zeplin.io/?ref=designsnitch.com',
    },
    {
      NAME: 'Designer News',
      DESCRIPTION:
        'A community for designers to share interesting links and events.',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9b78b8e014f9145ca04d39_dn.png',
      LINK: 'https://www.designernews.co/?ref=designsnitch.com',
    },
    {
      NAME: 'Degreeless.design',
      DESCRIPTION: 'Everything from design school, without design school',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5e9f6ddc9b20f9a3f127e34c_degreeless-design.jpg',
      LINK: 'https://www.degreeless.design/?ref=designsnitch.com',
    },
    {
      NAME: 'Design Systems Repo',
      DESCRIPTION: 'A frequently updated collection of Design System examples',
      CATEGORY: 'Design Systems',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea5959c8ad6b6c53098312a_502e5b53-86e5-4a52-b067-fec459bfd3df.gif',
      LINK: 'https://designsystemsrepo.com?ref=designsnitch.com',
    },
    {
      NAME: 'Spectrum by Adobe',
      DESCRIPTION: 'Adobe’s design system',
      CATEGORY: 'Design Systems',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cf78fa94705e01dfbdad_5ea04e24bc13ef6095f349ad_adoobe.png',
      LINK: 'https://spectrum.adobe.com?ref=designsnitch.com',
    },
    {
      NAME: 'Learn Mobile Design',
      DESCRIPTION: 'A curated list of mobile design resources',
      CATEGORY: 'Learn Design',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea08ca5693af67e3676ea75_09c131f8-d358-4c67-ad22-ff3422cf9bbc.jpeg',
      LINK: 'https://learnmobile.design?ref=designsnitch.com',
    },
    {
      NAME: 'Generated Photos',
      DESCRIPTION: 'Unique, worry-free model photos',
      CATEGORY: 'Stock Photos',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea47aa927484b3163a83c45_logo%20(19).png',
      LINK: 'https://generated.photos/?ref=designsnitch.com',
    },
    {
      NAME: 'Playbook',
      DESCRIPTION: 'Tips on career development and design process',
      CATEGORY: 'Jobs',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea483157899695d33c8564e_LLDNPViq_400x400.jpg',
      LINK: 'https://askplaybook.com?ref=designsnitch.com',
    },
    {
      NAME: 'Dropbox Design',
      DESCRIPTION: 'A collection of resources from Dropbox design team',
      CATEGORY: 'Design News',
      IMAGE_URL:
        'https://uploads-ssl.webflow.com/5e93a09c241fd812f57b83d7/5ea6cafa4df52bee1a20c050_5ea57ff8a5a8d25ea6dd6ec9_YhptN_9y_400x400.png',
      LINK: 'https://dropbox.design?ref=designsnitch.com',
    },
  ],
})

export const mutations = {
  makeFilter(state, category) {
    if (category.checked) {
      state.selectedCategory.push(category.category)
    } else if (state.selectedCategory.includes(category.category)) {
      const index = state.selectedCategory.indexOf(category.category)
      if (index > -1) {
        state.selectedCategory.splice(index, 1)
      }
    }

    state.categories.forEach((c, index) => {
      if (index === category.index) {
        c.check = category.checked
        console.log(c.check)
      }
    })
  },
}

export const getters = {
  resources(state) {
    return state.resources
  },
  categories(state) {
    return state.categories
  },
  selectedCategory(state) {
    return state.selectedCategory
  },
}
