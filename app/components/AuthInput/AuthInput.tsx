import Email from './../../../public/email.svg';
import Password from './../../../public/password.svg';
import Face from './../../../public/iconface.svg';
import './AuthInput.scss'

type propsInput = {
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,

}

export function AuthInput({ type, placeholder, value, onChange }: propsInput) {

    function getIcon(type: string) {
        switch (type) {
            case 'email':
                return <Email className="input__icon" />
            case 'password':
                return <Password className="input__icon" />
            case 'face':
                return <Face className="input__icon" />
            case null:
                return null
        }
    }

    return (
        <div className="input">
            <input className='input__field' type={type} placeholder={placeholder} value={value} onChange={onChange} />
            {getIcon(type)}
        </div>
    )
}