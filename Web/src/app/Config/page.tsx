'use client';

import React from "react";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


const template = {
  "kernelSource": {
    "name": "",
    "repo": "",
    "branch": "",
    "device": "",
    "defconfig": ""
  },
  "withKernelSU": false,
  "toolchains": [
    {
      "repo": "",
      "branch": "",
      "name": "",
      "binPath": []
    }
  ],
  "ccache": false,
  "params": {
    "ARCH": "",
    "CC": "",
    "externalCommand": {}
  },
  "AnyKernel3": {
    "use": false,
    "release": false,
    "repo": "",
    "branch": ""
  }
}

const result = []

export default function App() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Accordion isCompact variant="splitted">
        <AccordionItem key="1" aria-label="Configure1" title="Configure 1">

          <Button onPress={onOpen}>Show outputs</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Config</ModalHeader>
                  <ModalBody>
                    {JSON.stringify(result)}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Confirm
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Divider className="my-4" />
          <div className="flex">
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Kernel Source</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="email" label="Email" />
                <Divider className="my-4" />
                <Input type="email" label="Email" placeholder="Enter your email" />
              </CardBody>
            </Card>
            <Spacer x={4} />
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Toolchains</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="email" label="Email" />
                <Divider className="my-4" />
                <Input type="email" label="Email" placeholder="Enter your email" />
              </CardBody>
            </Card>
            <Spacer x={4} />
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Build params</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="email" label="Email" />
                <Divider className="my-4" />
                <Input type="email" label="Email" placeholder="Enter your email" />
              </CardBody>
            </Card>
            <Spacer x={4} />
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">AnyKernel3</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="email" label="Email" />
                <Divider className="my-4" />
                <Input type="email" label="Email" placeholder="Enter your email" />
              </CardBody>
            </Card>
            <Spacer x={4} />
            <div>
              <CheckboxGroup
                label="Select cities"
                defaultValue={["buenos-aires", "london"]}
              >
                <Checkbox value="buenos-aires">Is build with KernelSU</Checkbox>
                <Checkbox value="sydney">Use ccache</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
