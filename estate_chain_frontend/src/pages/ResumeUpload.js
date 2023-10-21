import { useState } from 'react'; 

const ResumeUpload = () => {
    const [selectedFile, setSelectedFile] = useState('null'); 

    const handleChange = (event) => {
        const file = event.target.files[0]; 
        setSelectedFile(file); 
    }

    const handleUpload = () => {

    }; 
    
    return (
        <>
        
        </>
    )
}

export default ResumeUpload; 