
const DownloadResumeButton = () => {
    const downloadResume = () => {
        const filename = 'Golam_Kibria.pdf';
        const resumePath = `/${filename}`;

        const link = document.createElement('a');
        link.href = resumePath;
        link.download = filename;
        link.click();
    };

    return (
        <button onClick={downloadResume} className="btn btn-ghost my-4 text-base border-gray-500 border-2">
            Download Resume
        </button>
    );
};

export default DownloadResumeButton;
