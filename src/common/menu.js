import { mainsite } from "./path";

const default_menu=[
    {
        label: 'Home',
        items: [{
            label: 'Main Site', icon: 'pi pi-fw pi-home', url: mainsite
        }]
    },
    {
        label: 'Admin Menu',
        items: [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/post-admin/'},
            {label: 'Site Config', icon: 'pi pi-fw pi-home', items: [
                {label: 'Category', icon: 'pi pi-fw pi-category', to: '/post-admin/category'},
            ]},
        ]
    },
]
const dev_menu = [
    {
        label: 'Dev Componenets', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/post-admin/formlayout' },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/post-admin/input' },
                    { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/post-admin/floatlabel" },
                    { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "/post-admin/invalidstate" },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/post-admin/button' },
                    { label: 'Table', icon: 'pi pi-fw pi-table', to: '/post-admin/table' },
                    { label: 'List', icon: 'pi pi-fw pi-list', to: '/post-admin/list' },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/post-admin/tree' },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/post-admin/panel' },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/post-admin/overlay' },
                    { label: "Media", icon: "pi pi-fw pi-image", to: "/post-admin/media" },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/post-admin/menu' },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/post-admin/messages' },
                    { label: 'File', icon: 'pi pi-fw pi-file', to: '/post-admin/file' },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/post-admin/chart' },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/post-admin/misc' },
                ]

            },
            {
                label: 'UI Blocks',
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/post-admin/blocks', badge: "NEW" },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react' }
                ]
            },
            {
                label: 'Icons',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/post-admin/icons' }
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-clone',
                items: [
                    { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/post-admin/crud' },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/post-admin/timeline' },
                    { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/post-admin/empty' }
                ]
            },

        ]
    },


   
  
   

    {
        label: 'Get Started',
        items: [
            { label: 'lilithbe github', icon: 'pi pi-fw pi-search', command: () => { window.location = "https://github.com/lilithbe" } }
        ]
    }
];
export const menu = process.env.REACT_APP_TYPE==="development"?[...default_menu,...dev_menu]:default_menu