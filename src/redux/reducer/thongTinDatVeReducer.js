import { createSlice } from '@reduxjs/toolkit';

const thongTinDatVeSlice = createSlice({
  name: 'ThongTinDatVe',
  initialState: {
    danhSachGheDangDat: []
  },
  reducers: {
    bookSeat(state, action) {
      const { danhSachGheDangDat } = state;
      const { payload } = action;

      // Kiểm tra xem ghế đã tồn tại trong danh sách chưa
      const index = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === payload.soGhe);

      // Nếu ghế đã tồn tại, hủy đặt ghế đó
      if (index !== -1) {
        state.danhSachGheDangDat = danhSachGheDangDat.filter(gheDangDat => gheDangDat.soGhe !== payload.soGhe);
      } else {
        // Nếu ghế chưa tồn tại, thêm ghế vào danh sách đặt
        state.danhSachGheDangDat.push(payload);
      }
    },
    cancelSeat(state, action) {
      const { danhSachGheDangDat } = state;
      const { payload } = action;

      // Tìm vị trí của ghế cần hủy trong danh sách đặt
      const index = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === payload);

      // Nếu ghế tồn tại trong danh sách đặt, hủy đặt ghế đó
      if (index !== -1) {
        state.danhSachGheDangDat = danhSachGheDangDat.filter(gheDangDat => gheDangDat.soGhe !== payload);
      }
    }
  }
});

export const { bookSeat, cancelSeat } = thongTinDatVeSlice.actions;
export default thongTinDatVeSlice.reducer;
