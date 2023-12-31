const ContentArea = (props: { children?: React.ReactNode }) => {
    return (
        <div className='relative mx-auto w-full max-w-2xl px-4'>
            {props.children}
        </div>
    );
};

export default ContentArea;
