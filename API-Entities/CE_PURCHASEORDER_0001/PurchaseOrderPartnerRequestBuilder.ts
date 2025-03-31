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
import { PurchaseOrderPartner } from './PurchaseOrderPartner';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderPartner} entity.
 */
export class PurchaseOrderPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderPartner<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderPartner` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderPartner` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderPartner<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderPartner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderPartner`.
   */
  create(
    entity: PurchaseOrderPartner<T>
  ): CreateRequestBuilder<PurchaseOrderPartner<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderPartner` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderPartner.purchaseOrder}.
   * @param partnerFunction Key property. See {@link PurchaseOrderPartner.partnerFunction}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderPartner` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    partnerFunction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderPartner<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderPartner<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PartnerFunction: partnerFunction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderPartner`.
   */
  update(
    entity: PurchaseOrderPartner<T>
  ): UpdateRequestBuilder<PurchaseOrderPartner<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderPartner`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderPartner.purchaseOrder}.
   * @param partnerFunction Key property. See {@link PurchaseOrderPartner.partnerFunction}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderPartner`.
   */
  delete(
    purchaseOrder: string,
    partnerFunction: string
  ): DeleteRequestBuilder<PurchaseOrderPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderPartner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderPartner` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderPartner<T>
  ): DeleteRequestBuilder<PurchaseOrderPartner<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    partnerFunction?: string
  ): DeleteRequestBuilder<PurchaseOrderPartner<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderPartner<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderPartner
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PartnerFunction: partnerFunction!
          }
    );
  }
}
