import api from "./api";

const TXS = '/api/txs'

export function getTxsData() {
    return api.get(TXS);
}