import api from "./api";

const TXS = '/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=2'

export function getTxsData() {
    return api.get(TXS);
}