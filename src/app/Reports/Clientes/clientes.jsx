import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function clientesPDF(clientes) {    
    pdfMake.vfs = pdfFonts.pdfMake.vfs;   

    const reportTitle = [
        {
            text: 'Clientes',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, bottom
        }         
    ];

    const dados = clientes.map(cliente => {
       return [
            {text: cliente.id, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: cliente.nome, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: cliente.email, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: cliente.fone, fontSize: 9, margin: [0, 2, 0, 2]}
       ] 
    })
    
    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10},
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
                        {text: 'E-mail', style: 'tableHeader', fontSize: 10},
                        {text: 'Fone', style: 'tableHeader', fontSize: 10},
                    ],
                    ...dados
                ]
            },
            layout: 'headerLineOnly',
        }
    ];

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,                
                margin: [0, 10, 20, 0] // left, top, right, bottom  
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default clientesPDF;