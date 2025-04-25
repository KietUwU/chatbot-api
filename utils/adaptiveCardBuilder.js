// utils/adaptiveCardBuilder.js
export function buildCardForPOList(poList = []) {
  const listPODataJSON = [];
  poList.forEach(po => {
    listPODataJSON.push(
      {
        "type": "TableRow",
        "cells": [
          {
            "type": "TableCell",
            "items": [
              {
                "type": "TextBlock",
                "text": `${po.PurchaseOrder}`,
                "wrap": true
              }
            ]
          },
          {
            "type": "TableCell",
            "items": [
              {
                "type": "TextBlock",
                "text": `${po.Supplier}`,
                "wrap": true
              }
            ]
          },
          {
            "type": "TableCell",
            "items": [
              {
                "type": "TextBlock",
                "text": `${po.PurchaseOrderDate}`,
                "wrap": true
              }
            ]
          },
          {
            "type": "TableCell",
            "items": [
              {
                "type": "TextBlock",
                "text": `${po.CreatedByUser}`,
                "wrap": true
              }
            ]
          }
        ]
      }
    );
  });

  const rowsJSON = [
    {
      "type": "TableRow",
      "cells": [
        {
          "type": "TableCell",
          "items": [
            {
              "type": "TextBlock",
              "text": "ID",
              "wrap": true
            }
          ]
        },
        {
          "type": "TableCell",
          "items": [
            {
              "type": "TextBlock",
              "text": "Supplier",
              "wrap": true
            }
          ]
        },
        {
          "type": "TableCell",
          "items": [
            {
              "type": "TextBlock",
              "text": "Order Date",
              "wrap": true
            }
          ]
        },
        {
          "type": "TableCell",
          "items": [
            {
              "type": "TextBlock",
              "text": "Created By",
              "wrap": true
            }
          ]
        }
      ]
    },
    ...listPODataJSON
  ];

  let body = [];

  if (poList.length > 0) {
    body = [
      {
        "type": "Container",
        "items": [
          {
            "type": "TextBlock",
            "text": "Purchase Order List",
            "wrap": true,
            "style": "heading",
            "size": "Large",
            "weight": "Bolder",
            "color": "Good"
          }
        ]
      },
      {
        "type": "Container",
        "items": [
          {
            "type": "Table",
            "columns": [
              {
                "width": 1
              },
              {
                "width": 1
              },
              {
                "width": 1
              },
              {
                "width": 1
              }
            ],
            "rows": [...rowsJSON]
          }
        ]
      }

    ];
  } else {
    body = [
      {
        "type": "TextBlock",
        "text": "No pending Purchase Order.",
        "wrap": true,
        "size": "Medium",
        "weight": "Bolder",
        "color": "Attention"
      }
    ];
  };

  return {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.3",
    "body": [...body]
  };
}

export function buildCardForConfirmation(poDetail, action) {
  let title = '';
  const PurchaseOrder = poDetail.PurchaseOrder || "Unknown PO #";
  const supplier = poDetail.Supplier || "Unknown Supplier";
  const poDate = poDetail.PurchaseOrderDate || "Unknown Date";
  const createdBy = poDetail.CreatedByUser || "Unknown User";

  if (action === 'approve' || title === 'reject') {
    title = `PO ${PurchaseOrder} - Purchase Order Appoval/Rejection Request`;
  } else if (action === 'detail') {
    title = `Purchase Order ${PurchaseOrder} Information`;
  };

  const actionJSON = action === 'approve' || title === 'reject' ? [{
    "type": "Action.Submit",
    "title": "Approve",
    "id": "approve",
    "tooltip": "Approve",
    "style": "positive"
  },
  {
    "type": "Action.Submit",
    "title": "Reject",
    "tooltip": "Reject",
    "mode": "secondary",
    "style": "destructive",
    "id": "reject"
  }] : [];

  return {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.3",
    "body": [
      {
        "type": "TextBlock",
        "size": "Large",
        "weight": "Bolder",
        "text": title,
        "color": "Good",
        "wrap": true,
        "spacing": "None"
      },
      {
        "type": "Container",
        "items": [
          {
            "type": "TextBlock",
            "text": "Details",
            "wrap": true,
            "size": "Medium",
            "weight": "Bolder",
            "spacing": "None"
          },
          {
            "type": "Container",
            "items": [
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": "Supplier:",
                        "wrap": true,
                        "weight": "Bolder"
                      }
                    ]
                  },
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": `${supplier}`,
                        "wrap": true
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": "Order Date:",
                        "wrap": true,
                        "weight": "Bolder"
                      }
                    ]
                  },
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": `${poDate}`,
                        "wrap": true
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": "Created By:",
                        "wrap": true,
                        "weight": "Bolder"
                      }
                    ]
                  },
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": `${createdBy}`,
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "actions": [
      ...actionJSON
    ]
  };
}

//module.exports = {
// buildCardForPOList,
//  buildCardForConfirmation
// };
