import React, { useState } from 'react';
import { Box, Divider, Flex, useTheme, Button, Skeleton, useDisclosure } from '@chakra-ui/react';
import { useCopyData } from '@/utils/tools';
import dynamic from 'next/dynamic';
import MyIcon from '@/components/Icon';

const APIKeyModal = dynamic(() => import('@/components/APIKeyModal'), {
  ssr: true
});

const baseUrl = 'https://ai.fulitimes.com/api/openapi';

const API = ({ modelId }: { modelId: string }) => {
  const theme = useTheme();
  const { copyData } = useCopyData();
  const {
    isOpen: isOpenAPIModal,
    onOpen: onOpenAPIModal,
    onClose: onCloseAPIModal
  } = useDisclosure();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex flexDirection={'column'} h={'100%'}>
      <Box display={['none', 'flex']} px={5} alignItems={'center'}>
        <Box flex={1}>
          AppId:
          <Box
            as={'span'}
            ml={2}
            fontWeight={'bold'}
            cursor={'pointer'}
            onClick={() => copyData(modelId, '已复制 AppId')}
          >
            {modelId}
          </Box>
        </Box>
        <Flex
          bg={'myWhite.600'}
          py={2}
          px={4}
          borderRadius={'md'}
          cursor={'pointer'}
          onClick={() => copyData(baseUrl, '已复制 API 地址')}
        >
          <Box border={theme.borders.md} px={2} borderRadius={'md'} fontSize={'sm'}>
            API服务器
          </Box>
          <Box ml={2} color={'myGray.900'} fontSize={['sm', 'md']}>
            {baseUrl}
          </Box>
        </Flex>
        <Button
          ml={3}
          leftIcon={<MyIcon name={'apikey'} w={'16px'} color={''} />}
          variant={'base'}
          onClick={onOpenAPIModal}
        >
          API 秘钥
        </Button>
      </Box>
      <Divider mt={3} />
      <Box flex={1}>
        <Skeleton h="100%" isLoaded={isLoaded} fadeDuration={2}>
          <iframe
            style={{
              width: '100%',
              height: '100%'
            }}
            src="https://vmoo.saud.net.cn/published/lmu/%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%85%A5/1-%E6%8E%A5%E5%85%A5%E6%96%87%E6%A1%A3API.md"
            frameBorder="0"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          />
        </Skeleton>
      </Box>
      {isOpenAPIModal && <APIKeyModal onClose={onCloseAPIModal} />}
    </Flex>
  );
};

export default API;
