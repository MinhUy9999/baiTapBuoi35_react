import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSeat } from '../redux/reducer/thongTinDatVeReducer'; // Thay đường dẫn phù hợp

function SeatRow({ hangGhe, soHangGhe }) {
    const dispatch = useDispatch();
    const danhSachGheDangDat = useSelector(state => state.ThongTinDatVe.danhSachGheDangDat);

    // render ghế
    const renderGhe = () => {
        return hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }
            // xét trạng thái ghế đang đặt
            let cssGheDangDat = "";
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);

            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon";
            }
            return (
                <button key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} onClick={() => {
                    dispatch(bookSeat(ghe));
                }}  >
                    {ghe.soGhe}
                </button>
            )
        })
    }

    // render hàng ghế
    const renderSeatLayout = () => {
        if (soHangGhe === 0) {
            return hangGhe.danhSachGhe.map((ghe, index) => {
                return (
                    <button key={index} className='rowNumber'>{ghe.soGhe}</button>
                )
            })
        } else {
            return (
                <>
                    {hangGhe.hang} {renderGhe()}
                </>
            )
        }
    }

    return (
        <>
            {renderSeatLayout()}
        </>
    )
}

export default SeatRow;
