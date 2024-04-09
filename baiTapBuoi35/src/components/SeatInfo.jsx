import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSeat } from '../redux/reducer/thongTinDatVeReducer';


function SeatInfo() {
    const dispatch = useDispatch();
    const danhSachGheDangDat = useSelector(state => state.ThongTinDatVe.danhSachGheDangDat);

    const renderDSGheDangDat = () => {
        return danhSachGheDangDat.map((gheDangDat, index) => {
            return (
                <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                        <button className='' onClick={() => {
                            dispatch(cancelSeat(gheDangDat.soGhe));
                        }}>
                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className='mt-3'>
                <ul className="mt-5 confirmSeat">
                    <li>
                        <button className='gheDuocChon' id='resSeat'></button>
                        <span className='fs-ghe'>Ghế đã chọn</span>
                    </li>
                    <li>
                        <button className='gheDangChon' id='seleSeat'></button>
                        <span className='fs-ghe'>Ghế đang chọn</span>
                    </li>
                    <li>
                        <button className='ghe ml-0' id='empSeat'></button>
                        <span className='fs-ghe'>Ghế trống</span>
                    </li>
                </ul>
            </div>
            <div className='mt-1'>
                <table className="table" border={2}>
                    <thead>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hủy đặt (Y/N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderDSGheDangDat()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SeatInfo;
