/**
 * 
 */
export class ConstructionInfoDescriptor {
    constructor(projectName, projectGUID, teeth) {
        this.projectName = projectName;
        this.projectGUID = projectGUID;
        this.teeth = teeth;
    }
}

/**
 * 
 */
export class ToothDescriptor {
    constructor(tooth) {
        this.number = tooth.number;
        this.reconstructionType = tooth.reconstructionType;
        this.implantType = tooth.implantType;
        this.cutbackPerformed = tooth.cutbackPerformed;
        this.isConnectToMesialNeighbor = tooth.isConnectToMesialNeighbor;
        this.emergenceProfileBorderIsBelowImplant = tooth.emergenceProfileBorderIsBelowImplant;
        this.angulatedScrewChannelType = tooth.angulatedScrewChannelType;
        this.axisScrewAngulation = tooth.axisScrewAngulation;
        this.screwDiameter = tooth.screwDiameter;
        this.matrixImplantGeometryTargetOutputConstructionFile = tooth.matrixImplantGeometryTargetOutputConstructionFile;
        this.fileNameImplantGeometry = tooth.fileNameImplantGeometry;
        this.implantGeometryFileHashSHA = tooth.implantGeometryFileHashSHA;
        this.implantLibraryEntryDescritor = tooth.implantLibraryEntryDescritor;
        this.implantLibraryEntryDisplayInformation = tooth.implantLibraryEntryDisplayInformation;
        this.implantLibraryEntryWithInterface = tooth.implantLibraryEntryWithInterface;
        this.implantLibraryEntryWithPremillAbutmentCollider = tooth.implantLibraryEntryWithPremillAbutmentCollider;   
        this.suggestedStrategy = tooth.suggestedStrategy;
        this.toothColor = tooth.toothColor;
        this.toothScanFileName = tooth.toothScanFileName;
    }
}