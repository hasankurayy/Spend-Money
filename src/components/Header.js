import React from 'react'

function Header({ money, total }) {
    return (
        <div className='header-main'>
            {money - total > 0 && total !== 0 && (
                <div className='header'>
                    Harcayacak <span>{money - total} TL</span> paranız kaldı.
                </div>
            )}

            {total === 0 && (
                <div className='header'>
                    Harcamak için <span>{money} TL</span> paranız var.
                </div>
            )}

            {money - total === 0 && (
                <div className='header'>
                    Paran bitti, parasız insan boş insandır!
                </div>
            )}

        </div >
    )
}

export default Header