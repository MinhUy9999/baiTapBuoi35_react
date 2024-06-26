import React from 'react';
import danhSachGheData from "../data/danhSachGhe.json";
import SeatInfo from './SeatInfo';
import SeatRow from './SeatRow';


export default function TicketBooking() {
    // render hàng ghế 
    const renderSeatLayout = () => {
        return danhSachGheData.map((hangGhe,index) => {
            return(
                <div key={index}>
                    <SeatRow hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }
// tạo giao diện
    return (
        <div className='bg-overlay'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 text-center ">
                        <h3 className='mt-3 h1'>MOVIE SEAT SELECTION</h3>
                        <h5 className='pt-0'>SCREEN THIS WAY</h5>
                        <div className='screen mt-3'></div>
                        <div className='text-left fs-ghe ml-5 mt-2'>
                            {/* render ra hàng ghế  */}
                            {renderSeatLayout()} 
                        </div>
                    </div>
                    <div className="col-4">
                        <SeatInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}
