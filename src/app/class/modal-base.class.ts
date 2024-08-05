import { ModalData } from "../interfaces/modal.interface";

export class ModalBase implements ModalData {
  showModal: boolean = false;
  modalTitle: string = '';
  modalSubtitle: string = '';
  entity: any;

  openModal(title: string, subtitle: string, entity: any) {
    this.showModal = true;
    this.modalTitle = title;
    this.modalSubtitle = subtitle;
    this.entity = entity;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmModal(callback: (entity: any) => void) {
    callback(this.entity);
    this.closeModal();
  }
}
