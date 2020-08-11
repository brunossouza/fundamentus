import FundamentusAPI from 'fundamentus-unofficial-api';

(async () => {
    const earningsHistory = await FundamentusAPI.fetchEarningsHistory('wege3');

    console.log(earningsHistory.minDate('2020-01-01').maxDate('2020-12-31'));
})();
