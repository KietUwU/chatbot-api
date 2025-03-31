/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PurOrderItemPricingElement } from './PurOrderItemPricingElement';

/**
 * Request builder class for operations supported on the {@link PurOrderItemPricingElement} entity.
 */
export class PurOrderItemPricingElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurOrderItemPricingElement<T>, T> {
  /**
   * Returns a request builder for querying all `PurOrderItemPricingElement` entities.
   * @returns A request builder for creating requests to retrieve all `PurOrderItemPricingElement` entities.
   */
  getAll(): GetAllRequestBuilder<PurOrderItemPricingElement<T>, T> {
    return new GetAllRequestBuilder<PurOrderItemPricingElement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurOrderItemPricingElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurOrderItemPricingElement`.
   */
  create(
    entity: PurOrderItemPricingElement<T>
  ): CreateRequestBuilder<PurOrderItemPricingElement<T>, T> {
    return new CreateRequestBuilder<PurOrderItemPricingElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurOrderItemPricingElement` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurOrderItemPricingElement.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurOrderItemPricingElement.purchaseOrderItem}.
   * @param pricingDocument Key property. See {@link PurOrderItemPricingElement.pricingDocument}.
   * @param pricingDocumentItem Key property. See {@link PurOrderItemPricingElement.pricingDocumentItem}.
   * @param pricingProcedureStep Key property. See {@link PurOrderItemPricingElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link PurOrderItemPricingElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `PurOrderItemPricingElement` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    pricingDocument: DeserializedType<T, 'Edm.String'>,
    pricingDocumentItem: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurOrderItemPricingElement<T>, T> {
    return new GetByKeyRequestBuilder<PurOrderItemPricingElement<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        PricingDocument: pricingDocument,
        PricingDocumentItem: pricingDocumentItem,
        PricingProcedureStep: pricingProcedureStep,
        PricingProcedureCounter: pricingProcedureCounter
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurOrderItemPricingElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurOrderItemPricingElement`.
   */
  update(
    entity: PurOrderItemPricingElement<T>
  ): UpdateRequestBuilder<PurOrderItemPricingElement<T>, T> {
    return new UpdateRequestBuilder<PurOrderItemPricingElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurOrderItemPricingElement`.
   * @param purchaseOrder Key property. See {@link PurOrderItemPricingElement.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurOrderItemPricingElement.purchaseOrderItem}.
   * @param pricingDocument Key property. See {@link PurOrderItemPricingElement.pricingDocument}.
   * @param pricingDocumentItem Key property. See {@link PurOrderItemPricingElement.pricingDocumentItem}.
   * @param pricingProcedureStep Key property. See {@link PurOrderItemPricingElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link PurOrderItemPricingElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests that delete an entity of type `PurOrderItemPricingElement`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    pricingDocument: string,
    pricingDocumentItem: string,
    pricingProcedureStep: string,
    pricingProcedureCounter: string
  ): DeleteRequestBuilder<PurOrderItemPricingElement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurOrderItemPricingElement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurOrderItemPricingElement` by taking the entity as a parameter.
   */
  delete(
    entity: PurOrderItemPricingElement<T>
  ): DeleteRequestBuilder<PurOrderItemPricingElement<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    pricingDocument?: string,
    pricingDocumentItem?: string,
    pricingProcedureStep?: string,
    pricingProcedureCounter?: string
  ): DeleteRequestBuilder<PurOrderItemPricingElement<T>, T> {
    return new DeleteRequestBuilder<PurOrderItemPricingElement<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurOrderItemPricingElement
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            PricingDocument: pricingDocument!,
            PricingDocumentItem: pricingDocumentItem!,
            PricingProcedureStep: pricingProcedureStep!,
            PricingProcedureCounter: pricingProcedureCounter!
          }
    );
  }
}
