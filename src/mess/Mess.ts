import {useEffect, useState} from "react";

export function Secret(){

    const [word, setWord] = useState('');

    console.log(`word: "${word}"\nword.length = ${word.length}`);
    if(word.length===5){
        setWord('')
    }
    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            // Только буквы, цифры и пробел
            // if (/^[a-zA-Z0-9 ]$/.test(event.key)) {
            //     setWord(prev => prev + event.key);
            // }
            if (/^[a-zA-Z0-9]$/.test(event.key)) {
                setWord(prev => prev + event.key);
            } else if (event.key === 'Escape') {
                setWord('')
            }
        };



        document.addEventListener('keyup', handleKeyUp);
        return () => document.removeEventListener('keyup', handleKeyUp);
    }, []);

    if(word==='777'){
        console.log('BINGO!!!')
    }

}

