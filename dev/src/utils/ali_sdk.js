import ap from '@/assets/js/alipayjsapi_3.1.1.min';

const aliPay = data => {
    let config = {};
    if(data.tradeNO){
        config.tradeNO = data.tradeNO;
    }
    if(data.orderStr){
        config.orderStr = data.orderStr;
    }
    ap.tradePay(config, res => {
        data.success && data.success(res);
    })
}

export {
    aliPay
}