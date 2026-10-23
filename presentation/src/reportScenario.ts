export const reportScenario = {
  customerTarget: 50,
  addedCustomers: 2,
  serviceDays: 30,
  reviewDay: 10,
};

export const customerProgress = reportScenario.addedCustomers / reportScenario.customerTarget * 100;
export const timeProgress = reportScenario.reviewDay / reportScenario.serviceDays * 100;
export const progressGap = timeProgress - customerProgress;
