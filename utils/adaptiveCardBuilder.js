// utils/adaptiveCardBuilder.js
export   function buildCardForPOList(poList = []) {
    const poText = poList.map(po => `- PO #${po.PurchaseOrder} | ${po.PurchaseOrderType} | ${po.PurchasingDocumentOrigin}`).join('\n');
  
    return {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.3",
      "body": [
       
        {
          "type": "TextBlock",
          "text": poText || "No pending POs.",
          "wrap": true
        }
      ]
    };
  }
  
  export   function buildCardForConfirmation(poNumber, action) {
    return {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.3",
      "body": [
        {
          "type": "TextBlock",
          "text": `${action === 'approve' ? '✅ Approved' : '❌ Rejected'} PO #${poNumber}`,
          "weight": "Bolder",
          "size": "Medium",
          "color": action === 'approve' ? "Good" : "Attention"
        }
      ]
    };
  }
  
  //module.exports = {
   // buildCardForPOList,
  //  buildCardForConfirmation
 // };
  