import { BranchBackendModel } from '../backend-models/branch-backend-model';

export enum BranchUtilization {
    High = 3,
    Medium = 2,
    Low = 1
}

export interface BranchAddress {
    street: string;
    postcode: string;
}

export interface BranchTimeSlot {
    from: string;
    to: string;
}

export interface BranchWeekDays {
    monday: BranchTimeSlot[];
    tuesday: BranchTimeSlot[];
    wednesday: BranchTimeSlot[];
    thursday: BranchTimeSlot[];
    friday: BranchTimeSlot[];
    saturday: BranchTimeSlot[];
    sunday: BranchTimeSlot[];
}

export interface BranchUIModelInterface {
    id?: string;

    name: string;
    clerkCount: number;
    maxUtilization: number;
    currentUtilization: number;
    maxReservations: number;
    maxDuration: number;
    utilization: BranchUtilization;
    address: BranchAddress;
    openingTimes: BranchWeekDays;
}

export class BranchUIModel implements BranchUIModelInterface {
    id: string;

    name: string;
    clerkCount: number;
    maxUtilization: number;
    currentUtilization: number;
    maxReservations: number;
    maxDuration: number;
    utilization: BranchUtilization;
    address: BranchAddress;
    openingTimes: BranchWeekDays;

    constructor(model: BranchUIModelInterface) {
        this.id = model.id;

        this.name = model.name;
        this.clerkCount = model.clerkCount;
        this.maxUtilization = model.maxUtilization;
        this.currentUtilization = model.currentUtilization;
        this.maxReservations = model.maxReservations;
        this.maxDuration = model.maxDuration;
        this.utilization = model.utilization;
        this.address = model.address;
        this.openingTimes = model.openingTimes;
    }

    public static initDefault(): BranchUIModel {
        return new BranchUIModel({
            name: '',
            clerkCount: 0,
            maxUtilization: 0,
            currentUtilization: 0,
            maxReservations: 0,
            maxDuration: 0,
            utilization: BranchUtilization.Low,
            address: {
                street: '',
                postcode: ''
            },
            openingTimes: {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: []
            }
        });
    }

    public static fromBackendModel(model: BranchBackendModel) {
        // TODO: Init with backend Model
        // this.name = model.name;
        // this.clerkCount = model.clerkCount;
        // this.maxUtilization = model.maxUtilization;
        // this.currentUtilization = model.currentUtilization;
        // this.maxReservations = model.maxReservations;
        // this.maxDuration = model.maxDuration;
        // this.utilization = model.utilization;
        // this.address = model.address;
        // this.openingTimes = model.openingTimes;
    }
}
