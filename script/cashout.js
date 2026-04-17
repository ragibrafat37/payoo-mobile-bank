document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const pin = document.getElementById('cashout-pin').value;
        const convertedPin = parseFloat(pin);

        const amount = document.getElementById('cashout-amount').value;
        console.log(amount)
        const convertedAmount = parseFloat(amount)


        const mainBalance = document.getElementById('main-balance').innerText;

        const convertedMainBalance = Number(mainBalance);
      
        if(convertedPin ===1234){
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;


        }
        else{
            alert('enter valid pin')
        }

    }
)