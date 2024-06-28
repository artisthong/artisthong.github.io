# Nuxt Content로 Markdown 웹페이지 만들기 - 1
> github에 작업중인 리포지토리를 정리하다가 우연히 github에 웹페이지를 만들 수 있는 기능을 발견하여 관련정보를 검색을 하던중 Markdown 으로 정적 웹페이지를 작성할 수 있는 것을 알게 되었습니다. 최근 Markdown 문법을 공부하던 찰나여서 이 기회에 기존 블로그를 github 페이지로 대체하고 이를 Markdown으로 컨텐츠를 관리해 보아야 겠다는 생각이 들어서 이렇게 만들어 보았습니다. 

## 준비물 
먼저, Markdown을 지원하는 CMS기반의 프레임워크나 라이브러리를 찾아보았는데, 최근 Nuxt3 프레임워크로 개발하고 있어서 관련 모듈이 있지 않을까 찾던중 역시나 Nuxt 재단에서 공식 지원하는 [Nuxt Content](https://content.nuxt.com/) 모듈을 찾았습니다.:+1:   
그래서 소개문서와 간편 가이드들을 확인해보니 제가 구현하기 적합한 것 같이 해당 모듈로 개발을 진행했습니다.   

1. Nuxt3 스캐폴드로 프로젝트 생성
2. Nuxt Content 모듈 추가 
3. Vuetify3 UI 프레임워크 설치 

---
## Nuxt3 스캐폴드로 프로젝트 생성
```shell
npx nuxi@latest init markdown-web
```
---
## Nuxt Content 모듈 추가 
