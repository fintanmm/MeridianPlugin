
  Pod::Spec.new do |s|
    s.name = 'MeridianMaps'
    s.version = '0.0.1'
    s.summary = 'A plugin for the Meridian Java SDK.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/fintanmm/MeridianPlugin.git'
    s.author = 'Fintan MacMahon'
    s.source = { :git => 'https://github.com/fintanmm/MeridianPlugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end