
import inquirer from 'inquirer'
import chalk from 'chalk'

let armazena_lista = [];


PropriedadesCss()


function PropriedadesCss() {
    inquirer
    .prompt([
        {
        type: 'list',
        name:'action',
        message:'O que deseja fazer?',
        choices:[
                'Adicionar propriedade',
                'Exibir propriedades',
                'Deletar propriedade',
                'Sair'
            ],
        },
    ])

    .then((resposta) =>{

        let action = resposta['action']
        
        if (action === 'Adicionar propriedade'){
            inserir()
        }else if (action === 'Exibir propriedades'){
            mostrar()
        }else if (action === 'Deletar propriedade'){
            deletar()
        }else if (action === 'Sair' ){
            sair()
        }
    })
}

function mostrar(){
    console.log("Sua lista CSS:", armazena_lista.sort())
    
}

function inserir(){
    inquirer
    .prompt([
        {
            name: 'inserir',
            message:'Qual propriedade deseja inserir?',
        },
    ])
    
    .then((resposta) =>{
      
        let inserir = resposta['inserir']
        
         if(!armazena_lista.includes(inserir)){
            armazena_lista.push(inserir)
            console.log(chalk.bgBlue.yellow('Propriedade inserida com sucesso!'))
            console.log("Sua lista CSS:", armazena_lista.sort())
            PropriedadesCss()
        }else{
            console.log(chalk.bgRed('Você já inseriu essa propriedade. Escolha outra!'))
            PropriedadesCss()
        }
    })
}


function deletar(){
    inquirer
    .prompt([
        {
            name:'deletar',
            message:'Digite a propriedade CSS que deseja deletar:',
        },
    ])
    .then((resposta) => {
        let deletar = resposta['deletar']

        if(armazena_lista === "" || armazena_lista.includes(deletar)){
            let findFor = deletar
            let index = armazena_lista.indexOf(findFor);
            while(index >= 0 ){
                armazena_lista.splice(index, 1)
                index = armazena_lista.indexOf(findFor);
            }

            console.log(chalk.bgMagenta.black('Propriedade deletada'))
            console.log("Sua lista atualizada:", armazena_lista.sort())
        }else{
            console.log(chalk.bgRed.black('Esta propriedade já foi deletada. Escolha outra!'))
                console.log("Sua lista CSS:", armazena_lista.sort())
        }
    })
}

function sair (){
    console.log(chalk.bgCyan.black('Volte sempre!'))
    process.exit()
}