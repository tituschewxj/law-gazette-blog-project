const ContentArea = (props: { children?: React.ReactNode }) => {
    return (
        <div className='mx-auto h-full max-w-2xl py-8 '>{props.children}</div>
    );
};

export default ContentArea;
