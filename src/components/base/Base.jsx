import './base.scss';

const Base = ({children}) => {
    return (
        <div className='base-layout'>
            {children}
        </div>
    )
}

export default Base;