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
import { PoSubcontractingComponent } from './PoSubcontractingComponent';

/**
 * Request builder class for operations supported on the {@link PoSubcontractingComponent} entity.
 */
export class PoSubcontractingComponentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PoSubcontractingComponent<T>, T> {
  /**
   * Returns a request builder for querying all `PoSubcontractingComponent` entities.
   * @returns A request builder for creating requests to retrieve all `PoSubcontractingComponent` entities.
   */
  getAll(): GetAllRequestBuilder<PoSubcontractingComponent<T>, T> {
    return new GetAllRequestBuilder<PoSubcontractingComponent<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PoSubcontractingComponent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PoSubcontractingComponent`.
   */
  create(
    entity: PoSubcontractingComponent<T>
  ): CreateRequestBuilder<PoSubcontractingComponent<T>, T> {
    return new CreateRequestBuilder<PoSubcontractingComponent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PoSubcontractingComponent` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PoSubcontractingComponent.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PoSubcontractingComponent.purchaseOrderItem}.
   * @param scheduleLine Key property. See {@link PoSubcontractingComponent.scheduleLine}.
   * @param reservationItem Key property. See {@link PoSubcontractingComponent.reservationItem}.
   * @param recordType Key property. See {@link PoSubcontractingComponent.recordType}.
   * @returns A request builder for creating requests to retrieve one `PoSubcontractingComponent` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    scheduleLine: DeserializedType<T, 'Edm.String'>,
    reservationItem: DeserializedType<T, 'Edm.String'>,
    recordType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PoSubcontractingComponent<T>, T> {
    return new GetByKeyRequestBuilder<PoSubcontractingComponent<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        ScheduleLine: scheduleLine,
        ReservationItem: reservationItem,
        RecordType: recordType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PoSubcontractingComponent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PoSubcontractingComponent`.
   */
  update(
    entity: PoSubcontractingComponent<T>
  ): UpdateRequestBuilder<PoSubcontractingComponent<T>, T> {
    return new UpdateRequestBuilder<PoSubcontractingComponent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PoSubcontractingComponent`.
   * @param purchaseOrder Key property. See {@link PoSubcontractingComponent.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PoSubcontractingComponent.purchaseOrderItem}.
   * @param scheduleLine Key property. See {@link PoSubcontractingComponent.scheduleLine}.
   * @param reservationItem Key property. See {@link PoSubcontractingComponent.reservationItem}.
   * @param recordType Key property. See {@link PoSubcontractingComponent.recordType}.
   * @returns A request builder for creating requests that delete an entity of type `PoSubcontractingComponent`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    scheduleLine: string,
    reservationItem: string,
    recordType: string
  ): DeleteRequestBuilder<PoSubcontractingComponent<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PoSubcontractingComponent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PoSubcontractingComponent` by taking the entity as a parameter.
   */
  delete(
    entity: PoSubcontractingComponent<T>
  ): DeleteRequestBuilder<PoSubcontractingComponent<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    scheduleLine?: string,
    reservationItem?: string,
    recordType?: string
  ): DeleteRequestBuilder<PoSubcontractingComponent<T>, T> {
    return new DeleteRequestBuilder<PoSubcontractingComponent<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PoSubcontractingComponent
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            ScheduleLine: scheduleLine!,
            ReservationItem: reservationItem!,
            RecordType: recordType!
          }
    );
  }
}
