import { couch2020Abstract } from './abstracts/couch2020';
import { ramirez2017Abstract } from './abstracts/ramirez2017';
import { kilina2012Abstract } from './abstracts/kilina2012';
import { ramirez2009Abstract } from './abstracts/ramirez2009';
import { lajoie2010Abstract } from './abstracts/lajoie2010';
import { ramirez2011Abstract } from './abstracts/ramirez2011';
import { ramirez2013Abstract } from './abstracts/ramirez2013';
import { park2016Abstract } from './abstracts/park2016';
import couch2020Image from './pubImages/couch2020.png';
import ramirez2017Image from './pubImages/ramirez2017.png';
import kilina2012Image from './pubImages/kilina2012.png';
import ramirez2009Image from './pubImages/ramirez2009.png';
import lajoie2010Image from './pubImages/lajoie2010.png';
import ramirez2011Image from './pubImages/ramirez2011.png';
import ramirez2013Image from './pubImages/ramirez2013.png';
import park2016Image from './pubImages/park2016.png';

export const publications = [
    {
        id: 'couch2020',
        title: "Ultrafast 1 MHz vacuum-ultraviolet source via highly cascaded harmonic generation in negative-curvature hollow core fibers",
        authors: "D. E. Couch, D. D. Hickstein, D. G. Winters, S. J. Backus, M. S. Kirchner, S. R. Domingue, J. Ramirez, C. G. Durfee, M. M. Murnane and H. C. Kapteyn",
        journal: "Optica",
        year: "2020",
        link: "https://opg.optica.org/optica/fulltext.cfm?uri=optica-7-7-832&id=433461",
        abstract: couch2020Abstract,
        firstPageImage: couch2020Image
    },
    {
        id: 'ramirez2017',
        title: "Charge Generation and Recombination in Organic Materials for Photovoltaics",
        authors: "J. J. Ramirez",
        journal: "PhD Thesis, University of Colorado, Boulder, CO",
        year: "2017",
        link: "https://ui.adsabs.harvard.edu/abs/2017PhDT.......143R/abstract",
        abstract: ramirez2017Abstract,
        firstPageImage: ramirez2017Image
    },
    {
        id: 'kilina2012',
        title: "Brightening of the Lowest Exciton in Carbon Nanotubes via Chemical Functionalization",
        authors: "S. Kilina, J. Ramirez and S. Tretiak",
        journal: "Nano Letters",
        year: "2012",
        link: "https://pubs.acs.org/doi/10.1021/nl300165w",
        abstract: kilina2012Abstract,
        firstPageImage: kilina2012Image
    },
    {
        id: 'ramirez2009',
        title: "Optical properties of the Si(111):H Surface with adsorbed Ag Clusters",
        authors: "J. J. Ramirez, D. S. Kilin and D. A. Micha",
        journal: "International Journal of Quantum Chemistry",
        year: "2009",
        link: "https://onlinelibrary.wiley.com/doi/10.1002/qua.22436",
        abstract: ramirez2009Abstract,
        firstPageImage: ramirez2009Image
    },
    {
        id: 'lajoie2010',
        title: "Optical Properties of Amorphous and Crystalline Silicon Surfaces Functionalized with AgN Adsorbates.",
        authors: "T. W. Lajoie, J. J. Ramirez, D. S. Kilin and D. A. Micha",
        journal: "International Journal of Quantum Chemistry",
        year: "2010",
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/qua.22906",
        abstract: lajoie2010Abstract,
        firstPageImage: lajoie2010Image
    },
    {
        id: 'ramirez2011',
        title: "Electronic Structure and Optical Absorbance of Doped Amorphous Silicon Slabs",
        authors: "J. J. Ramirez, D. S. Kilin and D. A. Micha",
        journal: "International Journal of Quantum Chemistry",
        year: "2011",
        link: "https://onlinelibrary.wiley.com/doi/10.1002/qua.23228",
        abstract: ramirez2011Abstract,
        firstPageImage: ramirez2011Image
    },
    {
        id: 'ramirez2013',
        title: "Electronic Structure and Optical Spectra of Semiconducting Carbon Nanotubes Functionalized by Diazonium Salts",
        authors: "J. Ramirez, M. L. Mayo, S. Kilina and S. Tretiak",
        journal: "Chemical Physics",
        year: "2013",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S030101041200403X",
        abstract: ramirez2013Abstract,
        firstPageImage: ramirez2013Image
    },
    {
        id: 'park2016',
        title: "Variation of Excited-State Dynamics in Trifluoromethyl Functionalized C60 Fullerenes",
        authors: "J. Park, J. J. Ramirez, T. T. Clikeman, B. W. Larson, O. V. Boltalina, S. H. Strauss and G. Rumbles",
        journal: "Physical Chemistry Chemical Physics",
        year: "2016",
        link: "https://pubs.rsc.org/en/content/articlelanding/2016/cp/c6cp04461a",
        abstract: park2016Abstract,
        firstPageImage: park2016Image
    }
];