os=require('os');

fifteenMinNormalizedLoadAvg = os.loadavg()[2]/os.cpus().length;

console.log("fifteen minute load avg, normalized by CPU number: "+
fifteenMinNormalizedLoadAvg);
