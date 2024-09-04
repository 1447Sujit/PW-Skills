import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider ({children}) {
  // Data

  const data = {
    // NAVBAR
    navbarLinks: ['Home', 'About', 'Contact Us'],

    // STATISTICS
    statistics: [
      {
        image: 'https://pwskills.com/images/homePage/statistics2.png',
        number: '600+',
        description: 'Different Courses',
      },
      {
        image: 'https://pwskills.com/images/homePage/statistics3.png',
        number: '600+',
        description: 'Different Courses',
      },
      {
        image: 'https://pwskills.com/images/homePage/statistics4.png',
        number: '600+',
        description: 'Different Courses',
      },
    ],

    // PRODUCTS
    products: [
      {
        image:
          'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg',
        title: 'PW Skills Lab',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      },
      {
        image:
          'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg',
        title: 'PW Skills Lab',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      },
      {
        image:
          'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg',
        title: 'PW Skills Lab',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      },
      {
        image:
          'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg',
        title: 'PW Skills Lab',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      },
      {
        image:
          'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg',
        title: 'PW Skills Lab',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      },
    ],

    // FOOTER
    footer: {
      logo: 'https://pwskills.com/images/PWSkills-white.png',
      contactEmail: 'support@pwskills.com',
      contactImage: 'https://pwskills.com/images/homePage/products-icon3.png',
      sections: [
        {
          title: 'PW Skills',
          links: ['About Us', 'FAQs', 'Privacy Policy'],
        },
        {
          title: 'Products',
          links: [
            'PW Skills Lab',
            'Job Portal',
            'Experience Portal',
            'Become an affiliate',
            'Hall of face',
          ],
        },
        {
          title: 'Links',
          links: ['Discord Channel', 'PW Youtube', 'Careers'],
        },
      ],
    },
  };


  const value={
       data,
  }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}