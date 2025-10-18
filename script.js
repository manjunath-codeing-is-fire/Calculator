$(() => {
    let expression = ""
    const operationcheck = () => {
        let t = expression.split("")[expression.length-1]
        return !(t == '+' || t == '-' || t == 'X' || t == '/')
    }

    const display = () => {
        expression = expression.length > 9 ? 
        expression.slice(0,9) : expression
        $('.screen').text(expression)
    }
    
    $('.ac').click(() => {
        expression = ""
        display()
    })

    $('.delete').click(() => {
        expression = expression.slice(0,expression.length-1)
        display()
    })
    
    $('.div').click(() => {
        if(operationcheck()){
            expression += '/'
            display()
        }
    })

    $('.plus').click(() => {
        if(operationcheck()){
            expression += '+'
            display()
        }
    })

    $('.min').click(() => {
        if(operationcheck()){
            expression += '-'
            display()
        }
    })

    $('.mul').click(() => {
       if(operationcheck()){
            expression += 'X'
            display()
        }
    })

    $('.eq').click(() => {
        if(operationcheck()){
            let texp = ""
            for(let item of expression){
                texp += item == 'X' ? '*' : item
            }
            expression = String(eval(texp))
            display()
        }
    })

    $('.dot').click(() => {
        if(operationcheck()){
            expression +='.'
            display()
        }
    })
    
    for (let i = 0; i < 10; i++) {
        $(`.${i}`).click(() => {
            if(expression.length <= 8){
                expression += `${i}`
            }
            display()
        })
    }
})