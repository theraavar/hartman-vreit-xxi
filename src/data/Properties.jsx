const baseURL = '/en/leasing/properties/'
export const PROPERTIES = [
    /* ------------------- */
    /*        DALLAS       */
    /* ------------------- */

    /* THE COLONY */
    {
        address: {
            city: 'The Colony',
            state: 'Texas',
            street: '5651 Highway 121',
            zipCode: '75056'
        },
        displayName: 'The Colony',
        id: 'the-colony',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/the-colony/5651-State-Highway-121-The-Colony-TX-Primary-Photo-1-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/the-colony/The+Colony+Retail+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/5651-State-Highway-121-The-Colony-TX/13744752/',
            url: baseURL + 'dallas/the-colony',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: false,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: false,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* RICHARDSON TECH CENTER */
    {
        address: {
            city: 'Richardson',
            state: 'Texas',
            street: '651 North Plano Rd',
            zipCode: '75081'
        },
        amenities: ['Professional Ownership and Management', 'Building Signage Available', 'Easy Access to Restaurants, Post Office, Retail Centers', 'Dock High and Grade Loading', 'After-hours, Direct and Controlled Suite Access', 'Surveillance Cameras', '14\' Clear Height', '100% Tenant-controlled HVAC'],
        description: ['Richardson Tech Center is a Class B four-building top-tier flex showroom property conveniently located two miles east of Highway 75. This property is minutes away from some of Dallas\' most popular, high-end retail, entertainment and fine dining establishments with excellent access to the Lyndon B. Johnson Freeway, George Bush Turnpike and Highway 75 interchange.'],
        displayName: 'Richardson Tech Center',
        id: 'richardson-tech-center',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/richardson-tech-center/651-N-Plano-Rd-Richardson-TX-921-richardson-tech-center-01-1-Large.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/richardson-tech-center/Richardson+Tech+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/651-N-Plano-Rd-Richardson-TX/17555491/',
            url: baseURL + 'dallas/richardson-tech-center',
        },
        schedules: {
            building: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '08:00 - 13:00',
                sunday: '00:00 - 00:00'
            },
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* -------------------- */
    /*        HOUSTON       */
    /* -------------------- */

    /* 11211 KATY FREEWAY */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '11211 Katy Freeway',
            zipCode: '77079'
        },
        amenities: ['Katy Freeway Frontage Location (Energy Corridor)', 'On-site Management and Leasing', 'After-hours Controlled Access', 'Reserved and Covered Parking', 'On-site Conference Room', 'Tenant Lounge', 'Newly Renovated Car Ports', 'New HVAC', 'Monitored Surveillance', 'Renovated Lobby', 'NeedlePoint Bipolar Ionization installed October 2020'],
        class: '',
        description: ['Located in the Energy Corridor on the south side of the Katy Freeway between Kirkwood and Wilcrest. 11211 Katy Freeway offers convenient access to Interstate 10, Beltway 8, and Memorial Drive. 11211 Katy Freeway has numerous restauraunts and retailers nearby providing abundant amenities for its tenants. This building has had over $1,000,000 in common area updates, making this the perfect location for your business.'],
        displayName: '11211 Katy Freeway',
        id: '11211-katy-freeway',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-Alternate-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-Entrance-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9624-9x6a9628-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9634-9x6a9638-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9639-9x6a9643-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9X6A9828-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9965-9x6a9969-10-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211+Katy+Freeway+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/11211-Katy-Fwy-Houston-TX/15045777/',
            url: baseURL + 'houston/11211-katy-freeway',
        },
        schedules: {
            building: {
                monday: '08:00 - 18:00',
                tuesday: '08:00 - 18:00',
                wednesday: '08:00 - 18:00',
                thursday: '08:00 - 18:00',
                friday: '08:00 - 18:00',
                saturday: '08:00 - 12:00',
                sunday: '00:00 - 00:00'
            },
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: false,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true
            },
            schedules: {
                building: true,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: true,
        },
        year: '1982',
    },
    /* 16420 PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16420 Park Ten Place',
            zipCode: '77084'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Free Garage Parking with Reserved Options Available', 'After-hours Controlled Access', 'On-site Monthly Tenant Appreciation Events', 'Move-in Ready Suites'],
        description: ['16420 Park Ten is a five-story, top-tier Class office property conveniently located in the western sector of the dynamic Energy Corridor, Houston\'s third largest submarket.This property offers excellent access to Highway 6, Interstate 10, and Sam Houston Tollway, benefitting from the current path of suburban development to Houston\'s western sector. 16420 Park Ten boasts an aesthetically pleasing exterior with an equally unique interior with abundant natural light and amenities for its tenants.'],
        displayName: '16420 Park Ten',
        id: '16420-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Alternate-Exterior-View-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Beautiful-Landscaping-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Courtyard-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Entrance-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Exterior-Facade-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Front-Lobby-7-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/16420-Park-Ten-Place-Dr-Houston-TX/17526177/',
            url: baseURL + 'houston/16420-park-ten',
        },
        schedules: {
            building: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '07:00 - 13:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '06:00 - 18:00',
                tuesday: '06:00 - 18:00',
                wednesday: '06:00 - 18:00',
                thursday: '06:00 - 18:00',
                friday: '06:00 - 18:00',
                saturday: '00:00 - 00:00',
                sunday: '00:00 - 00:00'
            }
        },
        suites: [
            {
                available: true,
                id: '540',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/540/927+-+16420+Park+Ten+Suite+540+-+1%2C365+nra+01.19.2023+(existing).jpg'],
                psf: '$10.00 - $12.00',
                sqft: '1,365'
            },
            {
                available: true,
                id: '560',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/560/927+-+16420+Park+Ten+Suite+560+-+1%2C330+nra+02.03.2022.jpg'],
                psf: '$10.00 - $12.00',
                sqft: '1,330'
            },
            {
                available: true,
                id: '570',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/570/927+-+16420+Park+Ten+Suite+570+-+1%2C095+nra+02.03.2022.jpg'],
                psf: '$10.00 - $12.00',
                sqft: '1,095'

            }
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: false,
            suites: true,
            type: false,
            year: false,
        },
    },
    /* 1400 BROADFIELD */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '1400 Broadfield Boulevard',
            zipCode: '77084'
        },
        amenities: ['Free Initial Test Fits', 'On-site Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Garage Parking with Reserved Options Available', 'On-site Monthly Tenant Appreciation Events', 'Move-in Ready Suites'],
        description: ['1400 Broadfield is a six-story, op-tier Class B property conveniently located in the dynamic Energy Corridor, Houston\'s third largest submarket.This property offers excellent access to Highway 6, Interstate 10, and Sam Houston Toilway, benefitting from the current path of suburban development to Houston\'s western sector. 1400 Broadfield boasts an aesthetically pleasing exterior with an qually unique interior that provides natural light.'],
        displayName: '1400 Broadfield',
        id: '1400-broadfield',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-1400-Broadfield-Blvd-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8554-9x6a8558-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8589-9x6a8593-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8599-9x6a8603-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8644-9x6a8648-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8699-9x6a8703-3-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400+Broadfield+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/1400-Broadfield-Blvd-Houston-TX/17526174/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oIJIDtYmu-IsqD40ljbk7JjxwWL5flDZmwh_d_lQm4Ibp2-kj8JnxAaAssrEALw_wcB',
            url: baseURL + 'houston/1400-broadfield',
        },
        schedules: {
            building: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '07:00 - 12:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '06:00 - 20:00',
                tuesday: '06:00 - 20:00',
                wednesday: '06:00 - 20:00',
                thursday: '06:00 - 20:00',
                friday: '06:00 - 20:00',
                saturday: '00:00 - 00:00',
                sunday: '00:00 - 00:00'
            }
        },
        suites: [
            {
                available: true,
                id: '400',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/400/926+-+1400+Broadfield+Suite+400+-+5%2C361+nra+02.13.2023+(existing).jpg'],
                psf: '$13.50 - $15.50',
                sqft: '5,361'
            },
            {
                available: true,
                id: '410',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/410/926+-+1400+Broadfield+Suite+410+-+8%2C203+nra+01.04.2023+(existing).jpg'],
                psf: '$13.50 - $15.50',
                sqft: '8,203'
            },
            {
                available: true,
                id: '625',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/625/926+-+1400+Broadfield+Suite+625+-+6%2C540+nra+01.20.2023+(existing).jpg'],
                psf: '$13.50 - $15.50',
                sqft: '6,540'
            },
            {
                available: true,
                id: '640',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/640/926+-+1400+Broadfield+Suite+640+-+1%2C546+nra+02.02.2023+(existing).jpg'],
                psf: '$13.50 - $15.50',
                sqft: '1,546'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: false,
            suites: true,
            type: false,
            year: false,
        },
    },
    /* ASHFORD ON THE BAYOU */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '1001 S. Dairy Ashford Rd',
            zipCode: '77077'
        },
        amenities: ['On-site Security Guard', 'Garage Parking with Reserved Options', 'Shared Amenity Floor', 'Tenant Lounge', 'Conference Room', 'On-site Leasing and Management', 'Executive Suites Available', 'Move-in Ready Suites', 'Newly Installed Showers', 'Food Trucks Weekly'],
        displayName: 'Ashford on the Bayou',
        id: 'ashford-on-the-bayou',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Primary-Property-View-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Alternate-Property-View-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Lobby-Seating-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Lobby-Entrance-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Property-Entrance-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Tenant-Lounge-9-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/Ashford+on+the+Bayou+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/1001-S-Dairy-Ashford-Rd-Houston-TX/28268827/',
            url: baseURL + 'houston/ashford-on-the-bayou',
        },
        schedules: {
            building: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '08:00 - 12:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '00:00 - 00:00',
                sunday: '00:00 - 00:00'
            }
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: false,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: false,
                url: true,
            },
            schedules: {
                building: false,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: true,
        },
        year: '1985'
    },
    /* ONE PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16365 Park Ten Place',
            zipCode: '77084'
        },
        displayName: 'One Park Ten',
        id: 'one-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/one-park-ten/16365-Park-Ten-Place-Dr-Houston-TX-1-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/one-park-ten/One+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.ca/portfolio-property/16365-Park-Ten-Place-Dr-Houston-TX/240069/',
            url: baseURL + 'houston/one-park-ten',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: false,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* TIMBERWAY II */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '15995 N. Barkers Landing Road',
            zipCode: '77079'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Parking with Reserved Options Available', 'Park-like Enviorment surrounding area', '2018 Energy Star Level', 'Move-in Ready Suites Available'],
        description: ['Timberway II is a three-story, Class B office property conveniently located in the Katy Freeway West / Energy Corridor submarket. This property offers convenient access to Interstate 10, Beltway 8 and Highway 6. Timberway II is located near numerous banks, hotels, and restuarants, and is in close proximity to the prestigious Westlake shopping center.'],
        displayName: 'Timberway II',
        id: 'timberway-II',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Property-Entrance-20-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Parking-and-Property-Exterior-21-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Parking-and-Property-Exterior-22-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Newly-renovated-lobby-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Office-Space-12-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/Timberway+II+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/15995-N-Barkers-Landing-Rd-Houston-TX/5800463/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oJoc-rXsLlIvgUZb4DjZzCqHTygbRCfFBymMa_aBoywl8tWGBWphh0aAl-iEALw_wcB',
            url: baseURL + 'houston/timberway-II',
        },
        schedules: {
            building: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '08:00 - 13:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '07:00 - 18:00',
                tuesday: '07:00 - 18:00',
                wednesday: '07:00 - 18:00',
                thursday: '07:00 - 18:00',
                friday: '07:00 - 18:00',
                saturday: '08:00 - 13:00',
                sunday: '00:00 - 00:00'
            }
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* TWO PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16300 Katy Freeway',
            zipCode: '77094'
        },
        displayName: 'Two Park Ten',
        id: 'two-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-16300-Katy-Fwy-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-16300-Katy-Fwy-Alternate-3-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-StudioRaheel_RAH_8056-Edit-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-Two-Park-Ten-hargrove-suite-6-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/Two+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/16300-Katy-Fwy-Houston-TX/5800460/',
            url: baseURL + 'houston/two-park-ten',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: false,
                security: false
            },
            size: true,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* WESLAYAN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '3100 Weslayan St.',
            zipCode: '77027'
        },
        amenities: ['Move-in Ready Suites', 'Free Initial Test Fits', 'Professional Ownership and Management', 'After-hours Controlled Access', 'Live 24-hour Monitored Surveillance Cameras', 'Free Garage Parking', 'On-site Courtesy Officer', 'Parks Pantry Market', 'On-site Day Porter'],
        description: ['3100 Weslayan is a four-story, top tier Class B property conveniently located right in the heart of Greenway Plaza. This property is in close proximity to some of Houston\'s most popular high - end hotels, retail, and fine dining establishments, and has easy access to Highway 59 and Loop 610. 3100 Weslayan boasts an aesthetically pleasing exterior featuring a courtyard and patio areas with an equally unique interior with abundant natural light and amenities for its tenants.'],
        displayName: 'Weslayan',
        id: 'weslayan',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Striking-Entrance-13-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-3100-Weslayan-Street-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Atrium-Courtyard-10-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Common-Conference-Rooms-18-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Covered-Entrance-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Easy-Access-to-US-59-and-Loop-610-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Elegant-Courtyard-9-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Multi-Level-Parking-Garage-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Proximity-to-High-End-Restaurants-7-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/Weslayan+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/3100-Weslayan-St-Houston-TX/21956362/',
            url: baseURL + 'houston/weslayan',
        },
        schedules: {
            building: {
                monday: '06:00 - 18:00',
                tuesday: '06:00 - 18:00',
                wednesday: '06:00 - 18:00',
                thursday: '06:00 - 18:00',
                friday: '06:00 - 18:00',
                saturday: '07:00 - 12:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '06:00 - 18:00',
                tuesday: '06:00 - 18:00',
                wednesday: '06:00 - 18:00',
                thursday: '06:00 - 18:00',
                friday: '06:00 - 18:00',
                saturday: '07:00 - 12:00',
                sunday: '00:00 - 00:00'
            }
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: false,
            suites: false,
            type: false,
            year: true,
        },
        year: '1978',
    },
    /* WILLOWBROOK */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '7915 FM 1960 West',
            zipCode: '77070'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Parking with Reserved Options Available', 'Move-in Ready Suites'],
        description: ['Willowbrook is a three-story, top-tier Class B property conveniently located in the FM 1960 submarket. This property offers convenient access to Highway 249, FM 1960, and Beltway 8. Willowbrook provides quick access to George Bush Internation Airport and downtown, with over a hundred stores and restaurants available within walking distance.'],
        displayName: 'Willowbrook',
        id: 'willowbrook',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Primary-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Lobby-Elevator-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Lobby-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Interior-View-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Alternate-3-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915+FM-1960+W%2C+Houston%2C+TX+77070+-+The+Willowbrook+Building+_+LoopNet_files/'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/Willowbrook+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/7915-FM-1960-W-Houston-TX/21917626/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oJSloeC9iCmxg-yNlpmWffctlcSKrSm5vqzwH3FAWgc1EUWkd-B9ZwaAuZwEALw_wcB',
            url: baseURL + 'houston/willowbrook',
        },
        schedules: {
            building: {
                monday: '07:00 - 06:00',
                tuesday: '07:00 - 06:00',
                wednesday: '07:00 - 06:00',
                thursday: '07:00 - 06:00',
                friday: '07:00 - 06:00',
                saturday: '08:00 - 13:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '07:00 - 06:00',
                tuesday: '07:00 - 06:00',
                wednesday: '07:00 - 06:00',
                thursday: '07:00 - 06:00',
                friday: '07:00 - 06:00',
                saturday: '08:00 - 13:00',
                sunday: '00:00 - 00:00'
            }
        },
        suites: [
            {
                available: true,
                id: '101',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/101/928+-+7915+FM+1960+Willowbrook+Suite+110+-+2%2C866+nra+01.27.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '1,945'
            },
            {
                available: true,
                id: '105',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/105/928+-+7915+FM+1960+Willowbrook+Suite+105+01.26.2023.jpg'],
                psf: '$8.00 - $10.00',
                sqft: '2,757'
            },
            {
                available: true,
                id: '115',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/115/928+-+7915+FM+1960+Willowbrook+Suite+115+-+1%2C055+nra+02.03.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '1,055'
            },
            {
                available: true,
                id: '201',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/201/928+-+7915+FM+1960+Willowbrook+Suite+201+-+1%2C368+nra+03.02.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '1,368'
            },
            {
                available: true,
                id: '209',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/209/928+-+7915+FM+1960+Willowbrook+Suite+209+-+490+nra+02.01.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '490'
            },
            {
                available: true,
                id: '210',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/210/928+-+7915+FM+1960+Willowbrook+Suite+210+-+4%2C352+nra+01.31.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '4,352'
            },
            {
                available: true,
                id: '226',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/226/928+-+7915+FM+1960+Willowbrook+Suite+226+-+330+nra+01.27.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '330'
            },
            {
                available: true,
                id: '365',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/365/928+-+7915+FM+1960+Willowbrook+Suite+365+-+1%2C321+nra+01.12.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '1,321'
            },
            {
                available: true,
                id: '380',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/380/928+-+7915+FM+1960+Willowbrook+Suite+380+-+997+nra+02.01.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '997'
            },
            {
                available: true,
                id: '390',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/390/928+-+7915+FM+1960+Willowbrook+Suite+390+-+1%2C542+nra+02.01.2023+(existing).jpg'],
                psf: '$8.00 - $10.00',
                sqft: '1,542'
            }
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: false,
            suites: true,
            type: false,
            year: false,
        },
    },

    /* -------------------- */
    /*      SAN ANTONIO     */
    /* -------------------- */

    /* SPECTRUM */
    {
        address: {
            city: 'San Antonio',
            state: 'Texas',
            street: '613 NW Loop 410',
            zipCode: '78216'
        },
        amenities: ['On-site Property Management', 'Conference Room', 'Garage Parking with Reserved Options', 'Tenant Lounge with Fresh Pantry Market', 'Recently Renovated Restrooms', 'After-Hours Controlled Access', 'Live Video Surveillance', 'NeedlePoint Bipolar Ionization Installed October 2020', '3 Miles from San Antonio International Airport', 'On-site Security Guard'],
        class: 'A',
        description: ['Spectrum is a 10-story, Class A building conveniently located in the North Central San Antonio submarket.'],
        displayName: 'Spectrum',
        id: 'spectrum',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Highly-Visible-Class-A-Office-Building-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Highly-Visible-Class-A-Office-Building-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Entrance-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-10-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-Elevators-11-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-Information-Desk-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Market-16-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Market-Seating-18-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/Spectrum+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/613-NW-Loop-410-San-Antonio-TX/28268831/',
            url: baseURL + 'san-antonio/spectrum',
        },
        schedules: {
            building: {
                monday: '07:00 - 19:00',
                tuesday: '07:00 - 19:00',
                wednesday: '07:00 - 19:00',
                thursday: '07:00 - 19:00',
                friday: '07:00 - 19:00',
                saturday: '07:00 - 13:00',
                sunday: '00:00 - 00:00'
            },
            security: {
                monday: '07:00 - 23:00',
                tuesday: '07:00 - 23:00',
                wednesday: '07:00 - 23:00',
                thursday: '07:00 - 23:00',
                friday: '07:00 - 23:00',
                saturday: '00:00 - 00:00',
                sunday: '00:00 - 00:00'
            }
        },
        size: '176,786 SF',
        suites: [
            {
                available: true,
                id: '195',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/195/195.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '2,603'
            },
            {
                available: true,
                id: '200',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/200.png'],
                psf: '$23.50 - $25.50',
                sqft: '18,345'
            },
            {
                available: true,
                id: '400',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/400/400.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '17,730'
            },
            {
                available: true,
                id: '515',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/515/515.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '693'
            },
            {
                available: true,
                id: '530',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/530/530.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '4,441'
            },
            {
                available: true,
                id: '610',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/610/610.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '1,258'
            },
            {
                available: true,
                id: '625',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/625/625.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '1,248'
            },
            {
                available: true,
                id: '875',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/875/875.jpg'],
                psf: '$23.50 - $25.50',
                sqft: '4,177'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: true,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            schedules: {
                building: true,
                security: true
            },
            size: true,
            suites: true,
            type: false,
            year: true,
        },
        year: '1983',
    },
    /* VILLAGE POINTE */
    {
        address: {
            city: 'San Antonio',
            state: 'Texas',
            street: '15665 San Pedro Ave.',
            zipCode: '78232'
        },
        description: ['Village Pointe is a large neighborhood shopping center located on San Pedro Avenue. With many anchor tenants, the shopping center has continuous traffic.'],
        displayName: 'Village Pointe',
        id: 'village-pointe',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-24.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-25.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-26.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-28.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/Village+Pointe+Flyer.pdf',
            url: baseURL + 'san-antonio/village-pointe',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: false,
                url: true,
            },
            schedules: {
                building: false,
                security: false
            },
            size: false,
            suites: false,
            type: false,
            year: false,
        },
    }
]
