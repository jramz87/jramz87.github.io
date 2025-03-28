import { couch2020Abstract } from './abstracts/couch2020';
import { ramirez2017Abstract } from './abstracts/ramirez2017';
import { kilina2012Abstract } from './abstracts/kilina2012';

export const publications = [
    {
        id: 'couch2020',
        title: "Ultrafast 1 MHz vacuum-ultraviolet source via highly cascaded harmonic generation in negative-curvature hollow core fibers",
        authors: "D. E. Couch, D. D. Hickstein, D. G. Winters, S. J. Backus, M. S. Kirchner, S. R. Domingue, J. Ramirez, C. G. Durfee, M. M. Murnane, and H. C. Kapteyn",
        journal: "Optica",
        year: "2020",
        link: "https://opg.optica.org/optica/fulltext.cfm?uri=optica-7-7-832&id=433461",
        abstract: couch2020Abstract
    },
    {
        id: 'ramirez2017',
        title: "Charge Generation and Recombination in Organic Materials for Photovoltaics",
        authors: "J. J. Ramirez",
        journal: "PhD Thesis, University of Colorado, Boulder, CO",
        year: "2017",
        link: "https://ui.adsabs.harvard.edu/abs/2017PhDT.......143R/abstract",
        abstract: ramirez2017Abstract
    },
    {
        id: 'kilina2012',
        title: "Brightening of the lowest exciton in carbon nanotubes via chemical functionalization",
        authors: "S. Kilina, J. Ramirez, and S. Tretiak",
        journal: "Nano Letters",
        year: "2012",
        link: "https://pubs.acs.org/doi/10.1021/nl300165w",
        abstract: kilina2012Abstract
    }
];