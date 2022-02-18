export const DEFAULTS = {
    areaDimensionsObj: {x: 3, y: 3},
    entityStartPosition: {x: 1, y: 1},

    initialEntityMaxComfortDifficulty: 1,

    designElementsPath: "./design_elements/",

    mui_TabPanelSx: {
        mt: '10px',
    },
    mui_TabPanelTheme: {
        palette: {
            primary: { //Button color in <AreaManager/>
                main: '#19BE42', //'#0E862C',
                contrastText: '#FFD700',//'#fff'
            },
            tabColor: {
                main: '#E6CA84',//'#F0EAB2',
                darker: '#743A20',//'#B6AC54'
            },
            aboutTitleColor: {
                main: '#846A2A'//'#165016'
            },
            tabAreaManagerColor: {
                main: '#9ACD32',
                darker: '#165016'
            },
            tabEntityManagerColor: {
                main: '#FFA07A',//'#FF7F50',//'#87CEEB',
                darker: '#741A1A', //'#B22222'//'#0000FF'
            }
        },
    },
    mui_controlPanelTabsTheme: {
        palette: {
            primary: { //indicatotColor в <Tabs />
                main: '#846A2A',//'#0E862C',
            }, 

            secondary: { //textColor в <Tabs />
                main: '#743A20',//'#463B20'
            },
            navbar: { //color в <AppBar/>
                main: '#DAA520', //'#866E0E'                
            },
        }
    }
};