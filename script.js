const bars = document.getElementById('bars');
const create = document.getElementById('createArray');
const bubble = document.getElementById('bubble');
const selection = document.getElementById('selection');
const insertion = document.getElementById('insertion');
const msg = document.getElementById('msg');

const arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 101))
}
console.log(arr)

create.addEventListener('click', () => {
    bars.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        bars.appendChild(div);       
        div.style.backgroundColor = 'yellow'
        div.style.display = 'inline-block'
        div.style.height = `${arr[i]}px`;
        div.style.width = '6px';
        div.style.marginRight = '3px'       
    }
})

// Bubble sort---->
bubble.addEventListener('click',()=>{
    bars.innerHTML = "";

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        bars.appendChild(div);
        div.style.backgroundColor = 'yellow'
        div.style.display = 'inline-block'
        div.style.height = `${arr[i]}px`;
        div.style.width = '6px';
        div.style.marginRight = '3px'
    }
    msg.textContent = 'Sorted by Bubble Sort'
    msg.style.color = 'aliceblue';
    msg.style.textAlign = 'center'
})

// Selection Sort---->
selection.addEventListener('click',()=>{
    bars.innerHTML = "";

    for(let i=0; i<arr.length; i++){

        let min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }

        if(min!=i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        bars.appendChild(div);
        div.style.backgroundColor = 'yellow'
        div.style.display = 'inline-block'
        div.style.height = `${arr[i]}px`;
        div.style.width = '6px';
        div.style.marginRight = '3px'
    }
    msg.textContent = 'Sorted by Selection Sort'
    msg.style.color = 'aliceblue';
    msg.style.textAlign = 'center'
})

// Insertion Sort---->
insertion.addEventListener('click',()=>{
    bars.innerHTML = "";

    for(let i=1; i<arr.length; i++){
        let current = arr[i];

        for(var j=i-1; j>=0 && arr[j]>current; j--){
            arr[j+1]=arr[j]
        }

        arr[j+1]=current;
    }
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        bars.appendChild(div);
        div.style.backgroundColor = 'yellow'
        div.style.display = 'inline-block'
        div.style.height = `${arr[i]}px`;
        div.style.width = '6px';
        div.style.marginRight = '3px'
    }
    msg.textContent = 'Sorted by Insertion Sort'
    msg.style.color = 'aliceblue';
    msg.style.textAlign = 'center'
})


